<template>
	<section itemscope :id="id" class="section mt-12" :class="className">
		<h2 class="text-4xl md:text-5xl font-bold text-center">{{ title }}</h2>
		<div class="section__divider mt-6 flex justify-center items-center">
			<div></div>
			<icon-circle class="mx-4" />
			<div></div>
		</div>
		<section-mes-services v-if="id === 'services'" />
		<section-realisations v-if="id === 'realisations'" />
		<section-tarifs v-if="id === 'tarifs'" />
		<section-contact v-if="id === 'contact'" />
	</section>
</template>

<script>
	import IconCircle from "@/components/icon/IconCircle"
	import SectionMesServices from "@/components/section/SectionMesServices"
	import SectionRealisations from "@/components/section/SectionRealisations"
	import SectionTarifs from "@/components/section/SectionTarifs"
	import SectionContact from "@/components/section/SectionContact"

	export default {
		name: "section-item",
		components: {
			IconCircle,
			SectionContact,
			SectionTarifs,
			SectionRealisations,
			SectionMesServices
		},
		props: {
			id: {
				type: String,
				required: true
			},
			className: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			}
		}
	}
</script>

<style>
	.section .section__divider div:first-child{
		width: 50%;
		height: 3px;
		background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), to(#000));
		background-image: -webkit-linear-gradient(180deg, transparent, #000);
		background-image: -moz-linear-gradient(180deg, transparent, #000);
		background-image: -o-linear-gradient(180deg, transparent, #000);
		background-image: linear-gradient(90deg, transparent, #000);
	}
	.section .section__divider div:last-child {
		width: 50%;
		height: 3px;
		background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#000), to(transparent));
		background-image: -webkit-linear-gradient(180deg, #000, transparent);
		background-image: -moz-linear-gradient(180deg, #000, transparent);
		background-image: -o-linear-gradient(180deg, #000, transparent);
		background-image: linear-gradient(90deg, #000, transparent);
	}
</style>