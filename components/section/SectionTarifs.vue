<template>
	<div class="tarifs mt-16">
		<div class="tarifs__devis bg-white flex items-center justify-center h-16 font-bold md:text-xl px-4"
				 v-html="$t('body.section.tarifs.demandeDevis')"></div>
		<div class="tarifs__items flex flex-wrap justify-center mt-8">
			<section-tarifs-item v-for="(item, i) in $t('body.section.tarifs.items')" :key="item.title" :item="item" :i="i" />
		</div>
		<div class="tarifs__annotations text-xs mt-2 text-center xl:text-left">
			<span class="underline font-bold">L'ensemble des tarifs indiqués sont H.T.</span>
			<span>
				<span class="font-bold">Paiment possible en plusieurs fois.</span>
			</span> <br>
			<span>* <span class="font-bold">Prix à titre informatif</span> : Changement possible selon les demandes et les choix du client.</span>
			<br>
			<span>** Estimation du temps de travail appuyé par un devis.</span> <br>
		</div>
	</div>
</template>

<script>
	import SectionTarifsItem from "@/components/section/SectionTarifsItem"
	import IconPlus from "@/components/icon/IconPlus"

	export default {
		name: "section-tarifs",
		components: {
			SectionTarifsItem,
			IconPlus
		}
	}
</script>

<style>
	.tarifs .tarifs__devis span span {
		color: #1ABC9C;
	}

	.tarifs .tarifs__annotations {
		color: #818181;
	}

</style>