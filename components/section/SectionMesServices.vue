<template>
	<div class="services flex mt-16">
		<div class="services__item relative hover:shadow-md transition-shadow duration-300 ease-in-out" :class="i < 3 ? 'mr-6' : ''" v-for="(service, i) in services">
			<div class="services__item__title flex justify-center items-center">
				<span>{{ service.title }}</span>
			</div>
			<div class="services__item__icon p-4 rounded-full absolute">
				<component :is="service.icon" />
			</div>
			<div class="services__item__description flex items-center bg-white text-center px-6 mb-6">
				<span>{{ service.description }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import IconPencil from "@/components/icon/IconPencil"
	import IconSearchCode from "@/components/icon/IconSearchCode"
	import IconSeo from "@/components/icon/IconSeo"
	import IconResponsive from "@/components/icon/IconResponsive"

	export default {
		name: "section-mes-services",
		data() {
			return {
				services: [
					{
						title: "Intégration Web",
						icon: IconPencil,
						description: "Transformation des maquette en votre site web."
					},
					{
						title: "Développement spécifique",
						icon: IconSearchCode,
						description: "Des outils adaptés à votre coeur de métier, applications & solutions personnalisées."
					},
					{
						title: "Référencement",
						icon: IconSeo,
						description: "Améliorer votre positionnement dans les moteurs de recherche."
					},
					{
						title: "Responsive design",
						icon: IconResponsive,
						description: "Compatible tous supports, tablette & application mobile."
					}
				]
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