<template>
	<div class="services flex flex-wrap mt-12">
		<section-mes-services-item v-for="item in $t('body.section.services.items')"
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
	}

	.services .services__item .services__item__title {
		height: 110px;
		background: linear-gradient(180deg, rgba(87, 95, 207, 1) 0%, rgba(255, 255, 255, 1) 100%);
	}

	.services .services__item .services__item__icon {
		top: 30%;
		left: calc(50% - 2.5rem);
		background-color: #F8F8F8;
	}

	.services .services__item .services__item__description {
		height: 190px;
	}
</style>