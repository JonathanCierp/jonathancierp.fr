<template>
	<ul class="nav__menu flex items-center">
		<core-header-menu-item v-for="item in this.$t('header.menus')" :key="item.to" :item="item" />
		<!--<v-popover class="flex items-center" popover-arrow-class="nav__menu__flag__popover-arrow tooltip-arrow popover-arrow"
							 popover-wrapper-class="nav__menu__flag__popover-wrapper wrapper">
			<li class="ml-4 cursor-pointer">
				<icon-france v-if="$i18n.locale === 'fr'" />
				<icon-english v-if="$i18n.locale === 'en'" />
			</li>
			<template slot="popover">
				<nuxt-link v-close-popover class="text-sm" v-if="$i18n.locale !== 'fr'" :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>
					<icon-france class="inline" />&nbsp;&nbsp;France
				</nuxt-link>
				<nuxt-link v-close-popover class="text-sm" v-if="$i18n.locale !== 'en'" :to="`/en${$route.fullPath}`" exact>
					<icon-english class="inline" />&nbsp;&nbsp;English
				</nuxt-link>
			</template>
		</v-popover>-->
	</ul>
</template>

<script>
	import CoreHeaderMenuItem from "@/components/core/header/CoreHeaderMenuItem"
	import IconFrance from "@/components/icon/IconFrance"
	import IconEnglish from "@/components/icon/IconEnglish"

	export default {
		name: "core-header-menu",
		components: {
			CoreHeaderMenuItem,
			IconFrance,
			IconEnglish
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
</style>