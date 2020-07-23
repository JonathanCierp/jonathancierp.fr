<template>
	<li class="nav__menu__item mx-2 relative" :class="menuActiveClass">
		<nuxt-link :to="menu.to" exact>
			{{ menu.label }}
		</nuxt-link>
		<div class="nav__menu__underline absolute"></div>
	</li>
</template>

<script>
	export default {
		name: "core-header-menu-item",
		props: {
			menu: {
				type: Object,
				required: true
			}
		},
		computed: {
			menuActiveClass: {
				get() {
					if(this.menu.to === "#presentation" && (this.$route.fullPath === "/" || this.$route.fullPath === "/en/")) {
						return "nav__menu__item--active"
					}else if(this.menu.to === this.$route.hash) {
						return "nav__menu__item--active"
					}
				}
			}
		}
	}
</script>

<style>

</style>