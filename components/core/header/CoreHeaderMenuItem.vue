<template>
	<li class="nav__menu__item mx-2 relative" :class="menuActiveClass">
		<nuxt-link :to="item.to" exact>
			{{ item.label }}
		</nuxt-link>
		<div class="nav__menu__underline absolute"></div>
	</li>
</template>

<script>
	export default {
		name: "core-header-menu-item",
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		computed: {
			menuActiveClass: {
				get() {
					if(this.item.to === "#presentation" && (this.$route.fullPath === "/" || this.$route.fullPath === "/en/" || this.$route.fullPath === "/en")) {
						return "nav__menu__item--active"
					}else if(this.item.to === this.$route.hash) {
						return "nav__menu__item--active"
					}
				}
			}
		}
	}
</script>

<style>

</style>