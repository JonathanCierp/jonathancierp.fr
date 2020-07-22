//npm i && npx nuxt build && npx nuxt export && npx nuxt serve
//nuxt build && nuxt export && nuxt serve
export default {
	server: {
		port: 3000, // par défaut: 3000
		host: "0.0.0.0" // par défaut: localhost
	},
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: "universal",
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: "server",
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: "Jonathan CIERP - Développeur web freelance - Création de site web",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: "Jonathan CIERP - Développeur web freelance - Création de site web" },
      { property: "og:site_name", content: "Jonathan CIERP - Développeur web freelance - Création de site web" },
      { property: "fb:app_id", content: "591635024888125" },
      { property: "og:description", content: "Développeur web freelance et créateur de site internet depuis 2019. " +
					"Développement web, création ou refonte de site internet, intégration, référencement, etc..." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://jonathancierp.fr/icon.png" },
      { property: "og:image:secure_url", content: "https://jonathancierp.fr/icon.png" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:image:alt", content: "Jonathan CIERP - Développeur web freelance" },
      { property: "og:url", content: "https://jonathancierp.fr" },
      { property: "og:locale", content: "fr_FR" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:description", content: "Développeur web freelance et créateur de site internet depuis 2019. " +
					"Développement web, création ou refonte de site internet, intégration, référencement, etc..." },
      { property: "twitter:title", content: "Jonathan CIERP - Développeur web freelance - Création de site web" },
      { property: "twitter:image", content: "https://jonathancierp.fr/icon.png" },
      { name: "robots", content: "noindex" },
      { hid: "description", name: "description", content: "Développeur web freelance et créateur de site internet depuis 2019. " +
					"Développement web, création ou refonte de site internet, intégration, référencement, etc..." }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
		{ src: "@/plugins/vue-carousel", mode: "client" },
		{ src: '@/plugins/google-analytics.js', mode: 'client' },
		{ src: '@/plugins/v-tooltip.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
	pwa: {
		meta: {
			title: "Développeur web freelance - Création de site web",
			author: "Jonathan CIERP",
		},
		manifest: {
			name: "Développeur web freelance - Création de site web",
			short_name: "Développeur web freelance",
			lang: "fr",
		},
	},
	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/
  build: {
  }
}
