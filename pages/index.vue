<template>
	<div class="container mx-auto">
		<section-item />
	</div>
</template>

<script>
	import SectionItem from "../components/section/SectionItem"

	export default {
		components: {

		},
		data() {
			return {
				sections: [
					{
						id: "mes-services",
						class: "mes-services",
						title: "Mes services"
					}
				]
			}
		}
	}
</script>

<style>

</style>