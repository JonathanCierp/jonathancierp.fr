import express from "express"
import nodemailer from "nodemailer"
import xssFilters from "xss-filters"

// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const rejectFunctions = new Map([
	["name", v => !!v],
	["phone", v => true],
	["subject", v => !!v],
	["message", v => !!v]
])

const validateAndSanitize = (key, value) => {
	// If map has key and function returns false, return sanitized input. Else, return false
	return rejectFunctions.has(key) && rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}

const sendMail = (name, phone, subject, message) => {
	const transporter = nodemailer.createTransport({
		host: "",
		port: "",
		auth: {
			user: "",
			pass: ""
		}
	})
	transporter.sendMail({
		from: "contact@jonathancierp.fr",
		to: "azerty24041997@gmail.com",
		subject: subject,
		text: `${name} ${phone} ${message}`
	})
}


app.post("/mail", (req, res) => {
	const attributes = ["name", "phone", "subject", "message"]

	// Map each attribute name to the validated and sanitized equivalent (false if validation failed)
	const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

	// True if some of the attributes new values are false -> validation failed
	const someInvalid = sanitizedAttributes.some(r => !r)

	if (someInvalid) {
		// Throw a 422 with a neat error message if validation failed
		return res.status(422).json({"error": "Ugh.. That looks unprocessable!"})
	}

	sendMail(...sanitizedAttributes)
	res.status(200).json({ "message": "OH YEAH" })
})

module.exports = {
	path: "/api",
	handler: app
}