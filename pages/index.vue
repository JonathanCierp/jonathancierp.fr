<template>
	<div class="container mx-auto">
		<main>
			<section-item v-for="section in sections" :key="section.id" :section="section" />
		</main>
	</div>
</template>

<script>
	import SectionItem from "../components/section/SectionItem"

	export default {
		components: {
			SectionItem
		},
		data() {
			return {
				sections: [
					{
						id: "mes-services",
						class: "mes-services",
						title: "Mes services"
					},
					{
						id: "realisations",
						class: "realisations",
						title: "Mes derniers projets"
					},
					{
						id: "tarifs",
						class: "tarifs",
						title: "Tarifs"
					},
					{
						id: "contact",
						class: "contact",
						title: "Me contacter"
					},
				]
			}
		}
	}
</script>

<style>

</style>