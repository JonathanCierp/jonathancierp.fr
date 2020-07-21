<template>
	<header class="nav container mx-auto flex justify-between text-white py-4 h-24 items-center">
		<div class="nav__brand flex items-center">
			<img class="nav__brand__image w-16 h-16 rounded-full" src="~@/assets/img/moi.png" alt="Jonathan CIERP">
			<div class="nav__brand__text ml-6">
				<span class="font-semibold">Jonathan CIERP</span>
			</div>
		</div>
		<core-header-menu :menus="menus" />
	</header>
</template>

<script>
	import CoreHeaderMenu from "@/components/core/header/CoreHeaderMenu"

	export default {
		name: "core-header",
		components: {
			CoreHeaderMenu
		},
		props: {
			menus: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style>
	.nav .nav__menu .nav__menu__underline{
		width: 0;
		transition: width .1s;
	}

	.nav .nav__menu .nav__menu__item:hover .nav__menu__underline{
		width: 100%;
		height: 3px;
		background-color: #1ABC9C;
	}

	.nav .nav__menu .nav__menu__item.nav__menu__item--active .nav__menu__underline{
		width: 100%;
		height: 3px;
		background-color: #1ABC9C;
	}
</style>