<template>
	<div class="lg:container mx-auto">
		<main>
			<section-item :id="$t('body.section.services.id')" :className="$t('body.section.services.class')"
				:title="$t('body.section.services.title')" />
			<section-item :id="$t('body.section.realisations.id')" :className="$t('body.section.realisations.class')"
				:title="$t('body.section.realisations.title')" />
			<section-item :id="$t('body.section.tarifs.id')" :className="$t('body.section.tarifs.class')"
				:title="$t('body.section.tarifs.title')" />
			<section-item :id="$t('body.section.contact.id')" :className="$t('body.section.contact.class')"
				:title="$t('body.section.contact.title')" />
		</main>
	</div>
</template>

<script>
	import SectionItem from "@/components/section/SectionItem"

	export default {
		components: {
			SectionItem
		}
	}
</script>

<style>

</style>