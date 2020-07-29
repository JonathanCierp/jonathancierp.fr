<template>
	<header class="nav px-4 py-4" :class="`${isMenuOpen ? 'nav__opened' : ''}`">
		<div class="lg:container mx-auto flex justify-between items-center" :class="`${isMenuOpen ? 'text-black' : ''}`">
			<div class="nav__brand flex items-center z-10">
				<img class="nav__brand__image w-16 h-16 rounded-full" src="~@/assets/img/moi.png" alt="Jonathan CIERP">
				<div class="nav__brand__text ml-6">
					<span class="font-semibold">Jonathan CIERP</span>
				</div>
			</div>
			<button @click="openMenu" class="nav__hamburger block md:hidden z-10" :class="`${isMenuOpen ? 'nav__hamburger__opened' : ''}`">
				<icon-hamburger />
			</button>
			<core-header-menu class="md:h-full md:flex" :open="isMenuOpen" />
		</div>
	</header>
</template>

<script>
	import CoreHeaderMenu from "@/components/core/header/CoreHeaderMenu"
	import IconHamburger from "@/components/icon/IconHamburger"

	export default {
		name: "core-header",
		components: {
			CoreHeaderMenu,
			IconHamburger
		},
		data() {
			return {
				isMenuOpen: false
			}
		},
		methods: {
			openMenu() {
				this.isMenuOpen = !this.isMenuOpen
			}
		}
	}
</script>

<style>
	.nav {
		transition: background-color .2s ease-in-out;
	}

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

	.nav.nav__bottom__minus .nav__menu .nav__menu__item.nav__menu__item--active .nav__menu__underline, .nav.nav__bottom__minus .nav__menu .nav__menu__item:hover .nav__menu__underline{
		bottom: -10px;
	}

	.nav.nav__opened.nav__bottom__minus .nav__menu .nav__menu__item.nav__menu__item--active .nav__menu__underline, .nav.nav__opened.nav__bottom__minus .nav__menu .nav__menu__item:hover .nav__menu__underline{
		bottom: unset;
	}

	@media only screen and (max-width: 768px) {
		.nav__menu {
			max-height: 0;
			background-color: white;
			height: 500px;
			padding-top: 290px;
			left: 0;
			transform: translateY(-100%);
			transition: transform .5s, max-height .5s;
			position: absolute;
			width: 100%;
		}

		.nav__opened .nav__menu {
			max-height: 500px;
			transform: translateY(0%);
		}
	}
</style>