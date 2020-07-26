<template>
	<div class="services__item relative hover:shadow-md transition-shadow duration-300 ease-in-out">
		<div class="services__item__title flex justify-center items-center">
			<span v-html="item.title"></span>
		</div>
		<div class="services__item__icon p-4 rounded-full absolute">
			<component :is="icons[item.id]" />
		</div>
		<div class="services__item__description flex items-center bg-white text-center px-6 mb-6">
			<span v-html="item.description"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "section-mes-services",
		props: {
			item: {
				type: Object,
				required: true
			},
			icons: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style>

</style>