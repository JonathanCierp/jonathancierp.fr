<template>
	<li class="nav__menu__item mx-2 relative" :class="`${menuActiveClass} ${openClass}`" :style="`width:${item.width};`">
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
			},
			open: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			open: function (v) {
				if(v) {
					setTimeout(() => {
						this.openClass = "nav__menu__item_opened"
					}, 350)
				}else {
					this.openClass = ""
				}
			}
		},
		data() {
			return {
				openClass: ""
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
	@media only screen and (max-width: 768px) {
		.nav__menu__item {
			padding: .50rem 0;
			opacity: 0;
		}

		.nav__menu__item_opened.nav__menu__item {
			opacity: 1;
		}
	}
</style>