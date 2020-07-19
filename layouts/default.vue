<template>
  <div v-if="show">
		<div class="header-background-color flex flex-col">
			<core-header :menus="menus" />
			<section-presentation />
		</div>
		<core-background-shape />
    <Nuxt />
  </div>
</template>

<script>
	import CoreHeader from "@/components/core/header/CoreHeader"
	import CoreBackgroundShape from "@/components/core/CoreBackgroundShape"
	import SectionPresentation from "@/components/section/SectionPresentation"

	export default {
		components: {
			CoreHeader,
			CoreBackgroundShape,
			SectionPresentation
		},
		data() {
			return {
				show: false,
				menus: [
					{
						to: "#presentation",
						label: "Présentation"
					},
					{
						to: "#mes_services",
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
		mounted() {
			this.show = true
		}
	}
</script>

<style>
	body {
		background-color: #F5F5F5;
	}

	.header-background-color {
		height: 450px;
		width: 100%;
		background-color: #575FCF;
	}
</style>