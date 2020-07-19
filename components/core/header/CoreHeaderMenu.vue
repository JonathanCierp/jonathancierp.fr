<template>
	<ul class="nav__menu flex items-center">
		<core-header-menu-item v-for="menu in menus" :menu="menu" :key="menu.to" />
		<li class="ml-4 w-8 h-8 rounded-full bg-black"></li>
	</ul>
</template>

<script>
	import CoreHeaderMenuItem from "@/components/core/header/CoreHeaderMenuItem"

	export default {
		name: "core-header-menu",
		components: {
			CoreHeaderMenuItem
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
	.nav .nav__menu .nav__menu__item:hover .nav__menu__underline{
		width: 100%;
		height: 3px;
		background-color: #1ABC9C;
	}

	.nav .nav__menu .nav__menu__item.nav__menu__item--active .nav__menu__underline{
		width: 100%;
		height: 2px;
		background-color: #1ABC9C;
	}
</style>