<template>
  <div v-if="show">
		<div class="header-background-color flex flex-col">
			<core-header :class="headerClass" :menus="menus" />
			<section-presentation />
		</div>
		<core-background-shape />
    <Nuxt />
		<core-footer class="mt-12" />
  </div>
</template>

<script>
	import CoreHeader from "@/components/core/header/CoreHeader"
	import CoreFooter from "@/components/core/CoreFooter"
	import CoreBackgroundShape from "@/components/core/CoreBackgroundShape"
	import SectionPresentation from "@/components/section/SectionPresentation"

	export default {
		components: {
			CoreHeader,
			CoreFooter,
			CoreBackgroundShape,
			SectionPresentation
		},
		data() {
			return {
				headerClass: "text-white py-4 h-24",
				show: false,
				menus: [
					{
						to: "#presentation",
						label: "Présentation"
					},
					{
						to: "#mes-services",
						label: "Mes services"
					},
					{
						to: "#realisations",
						label: "Réalisations"
					},
					{
						to: "#tarifs",
						label: "Tarifs"
					},
					{
						to: "#contact",
						label: "Contact"
					}
				]
			}
		},
		methods: {
			handleScroll() {
				if(window.scrollY >= 20) {
					this.headerClass = "bg-white text-black fixed w-full py-1 z-50 nav__bottom__minus"
				}else {
					this.headerClass = "text-white py-4 h-24"
				}
			}
		},
		mounted() {
			this.show = true
		},
		created() {
			if (process.client) {
				window.addEventListener("scroll", this.handleScroll);
			}
		},
		destroyed() {
			if (process.client) {
				window.removeEventListener("scroll", this.handleScroll);
			}
		}
	}
</script>

<style>
	html {
		scroll-behavior: smooth;
	}

	body {
		background-color: #f4f8fc;
		/*background-color: #F5F5F5;*/
	}

	body.modal-active {
		overflow: hidden;
	}

	.header-background-color {
		height: 450px;
		width: 100%;
		background-color: #575FCF;
	}
</style>