<template>
	<ul class="nav__menu flex items-center">
		<core-header-menu-item v-for="menu in menus" :menu="menu" :key="menu.to" />
		<v-popover class="flex items-center">
			<li class="ml-4 cursor-pointer">
				<icon-france />
			</li>
			<template slot="popover">
				<a v-close-popover>Close</a>
			</template>
		</v-popover>
	</ul>
</template>

<script>
	import CoreHeaderMenuItem from "@/components/core/header/CoreHeaderMenuItem"
	import IconFrance from "@/components/icon/IconFrance"

	export default {
		name: "core-header-menu",
		components: {
			CoreHeaderMenuItem,
			IconFrance
		},
		props: {
			menus: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style scoped>
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

	.tooltip[x-placement^="bottom"] {
		margin-top: 6px;
		margin-left: 8px;
	}
</style>