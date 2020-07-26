<template>
	<div class="services flex mt-16">
		<section-mes-services-item :class="item.id !== 'responsive' ? 'mr-6' : ''" v-for="item in $t('body.section.services.items')"
			:item="item" :key="item.id" :icons="icons" />
	</div>
</template>

<script>
	import SectionMesServicesItem from "@/components/section/SectionMesServicesItem"
	import IconPencil from "@/components/icon/IconPencil"
	import IconSearchCode from "@/components/icon/IconSearchCode"
	import IconSeo from "@/components/icon/IconSeo"
	import IconResponsive from "@/components/icon/IconResponsive"

	export default {
		name: "section-mes-services",
		components: {
			SectionMesServicesItem
		},
		data() {
			return {
				icons: {
					integration: IconPencil,
					specifique: IconSearchCode,
					seo: IconSeo,
					responsive: IconResponsive
				}
			}
		}
	}
</script>

<style>
	.services .services__item {
		height: 300px;
		width: 25%;
	}

	.services .services__item .services__item__title {
		height: 110px;
		background: linear-gradient(180deg, rgba(87, 95, 207, 1) 0%, rgba(255, 255, 255, 1) 100%);
	}

	.services .services__item .services__item__icon {
		top: 30%;
		left: 41%;
		background-color: #F8F8F8;
	}

	.services .services__item .services__item__description {
		height: 190px;
	}
</style>