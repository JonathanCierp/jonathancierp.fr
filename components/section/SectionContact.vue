<template>
	<div class="contact flex mt-16">
		<div class="contact__contact">
			<section-contact-item v-for="contact in $t('body.section.contact.items')" :key="contact.title" :contact="contact" :icons="icons" />
		</div>
		<div class="contact__separator mx-8"></div>
		<form class="contact__form" @submit.prevent="onSubmit">
			<div class="flex">
				<form-input ref="name" v-model="form.name" class="mr-4 flex-grow" :placeholder="$t('body.section.contact.form.nom')" :icon-left="iconUser" required />
				<form-input ref="phone" v-model="form.phone" class="ml-4 flex-grow" type="tel" :placeholder="$t('body.section.contact.form.telephone')" :icon-left="iconPhone" />
			</div>
			<form-input ref="subject" v-model="form.subject" class="flex-grow mt-6" :placeholder="$t('body.section.contact.form.sujet')" :icon-left="iconSubject" required />
			<form-textarea ref="message" v-model="form.message" class="flex-grow mt-6" :placeholder="$t('body.section.contact.form.message')" required />
			<div class="contact__form__button text-right mt-8">
				<button type="submit" class="text-white font-semibold py-3 px-8" v-html="$t('body.section.contact.form.button')"></button>
			</div>
		</form>
	</div>
</template>

<script>
	import SectionContactItem from "@/components/section/SectionContactItem"
	import FormInput from "@/components/form/FormInput"
	import FormTextarea from "@/components/form/FormTextarea"
	import IconRoad from "@/components/icon/IconRoad"
	import IconPhone from "@/components/icon/IconPhone"
	import IconMail from "@/components/icon/IconMail"
	import IconCog from "@/components/icon/IconCog"
	import IconUser from "@/components/icon/IconUser"
	import IconSubject from "@/components/icon/IconSubject"

	export default {
		name: "section-contact",
		components: {
			SectionContactItem,
			FormInput,
			FormTextarea
		},
		data() {
			return {
				icons: {
					"icon-road": IconRoad,
					"icon-phone": IconPhone,
					"icon-mail": IconMail,
					"icon-cog": IconCog
				},
				iconUser: IconUser,
				iconPhone: IconPhone,
				iconSubject: IconSubject,
				form: {
					name: null,
					phone: null,
					subject: null,
					message: null
				}
			}
		},
		methods: {
			onSubmit() {
				let formValid = true

				if(!this.$refs.name.validate()) {
					formValid = this.$refs.name.validate()
				}

				if(!this.$refs.subject.validate()) {
					formValid = this.$refs.subject.validate()
				}

				if(!this.$refs.message.validate()) {
					formValid = this.$refs.message.validate()
				}

				if(formValid) {
					console.log(1)
				}
			}
		}
	}
</script>

<style>
	.contact .contact__contact {
		width: 30%;
		height: 450px;
	}

	.contact .contact__separator {
		height: 450px;
		width: 2px;
		background-color: #1ED0AD;
	}

	.contact .contact__form {
		width: 70%;
	}

	.contact .contact__form .contact__form__button button {
		background-color: #1ABC9C;
		border: 4px solid #1ED0AD;
	}

	.contact .contact__form .contact__form__button button:hover {
		background-color: #1ED0AD;
	}
</style>