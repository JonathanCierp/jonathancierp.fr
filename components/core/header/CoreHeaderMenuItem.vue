<template>
	<li class="nav__menu__item mx-2 relative" :class="`${active ? 'nav__menu__item--active': ''}`">
		<nuxt-link :to="to" exact>
			{{ label }}
		</nuxt-link>
		<div class="nav__menu__underline absolute"></div>
	</li>
</template>

<script>
	export default {
		name: "core-header-menu-item",
		props: {
			label: {
				type: String,
				required: true
			},
			to: {
				type: String,
				required: true
			},
			active: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			menuActiveClass: {
				get() {
					/*if(this.menu.to === "#presentation" && (this.$route.fullPath === "/" || this.$route.fullPath === "/en/")) {
						return "nav__menu__item--active"
					}else if(this.menu.to === this.$route.hash) {
						return "nav__menu__item--active"
					}*/
				}
			}
		}
	}
</script>

<style>

</style>