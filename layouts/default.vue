<template>
  <div v-if="show">
		<div class="header-background-color flex flex-col">
			<core-header class="fixed w-full" :class="headerClass" />
			<section-presentation class="px-4 pt-24" />
		</div>
		<core-background-shape />
    <Nuxt class="px-4" />
		<core-footer class="mt-12" />
  </div>
</template>

<script>
	import CoreHeader from "@/components/core/header/CoreHeader"
	import CoreFooter from "@/components/core/CoreFooter"
	import CoreBackgroundShape from "@/components/core/CoreBackgroundShape"
	import SectionPresentation from "@/components/section/SectionPresentation"

	export default {
		components: {
			CoreHeader,
			CoreFooter,
			CoreBackgroundShape,
			SectionPresentation
		},
		data() {
			return {
				headerClass: "text-white py-4 h-24",
				show: false
			}
		},
		methods: {
			handleScroll() {
				if(window.scrollY >= 20) {
					this.headerClass = "bg-white text-black py-1 z-50 nav__bottom__minus"
				}else {
					this.headerClass = "text-white py-4 h-24"
				}
			}
		},
		mounted() {
			this.show = true
		},
		created() {
			if (process.client) {
				window.addEventListener("scroll", this.handleScroll);
			}
		},
		destroyed() {
			if (process.client) {
				window.removeEventListener("scroll", this.handleScroll);
			}
		}
	}
</script>

<style>
	button:focus {
		outline: none;
	}

	html {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	body {
		background-color: #f4f8fc;
		/*background-color: #F5F5F5;*/
	}

	body.modal-active {
		overflow: hidden;
	}

	.header-background-color {
		height: 450px;
		width: 100%;
		background-color: #575FCF;
	}

	.tooltip {
		display: block !important;
		z-index: 10000;
	}

	.tooltip .tooltip-inner {
		background: black;
		color: white;
		border-radius: 16px;
		padding: 5px 10px 4px;
	}

	.tooltip .tooltip-arrow {
		width: 0;
		height: 0;
		border-style: solid;
		position: absolute;
		margin: 5px;
		border-color: black;
		z-index: 1;
	}

	.tooltip[x-placement^="top"] {
		margin-bottom: 5px;
	}

	.tooltip[x-placement^="top"] .tooltip-arrow {
		border-width: 5px 5px 0 5px;
		border-left-color: transparent !important;
		border-right-color: transparent !important;
		border-bottom-color: transparent !important;
		bottom: -5px;
		left: calc(50% - 5px);
		margin-top: 0;
		margin-bottom: 0;
	}

	.tooltip[x-placement^="bottom"] {
		margin-top: 5px;
	}

	.tooltip[x-placement^="bottom"] .tooltip-arrow {
		border-width: 0 5px 5px 5px;
		border-left-color: transparent !important;
		border-right-color: transparent !important;
		border-top-color: transparent !important;
		top: -5px;
		left: calc(50% - 5px);
		margin-top: 0;
		margin-bottom: 0;
	}

	.tooltip[x-placement^="right"] {
		margin-left: 5px;
	}

	.tooltip[x-placement^="right"] .tooltip-arrow {
		border-width: 5px 5px 5px 0;
		border-left-color: transparent !important;
		border-top-color: transparent !important;
		border-bottom-color: transparent !important;
		left: -5px;
		top: calc(50% - 5px);
		margin-left: 0;
		margin-right: 0;
	}

	.tooltip[x-placement^="left"] {
		margin-right: 5px;
	}

	.tooltip[x-placement^="left"] .tooltip-arrow {
		border-width: 5px 0 5px 5px;
		border-top-color: transparent !important;
		border-right-color: transparent !important;
		border-bottom-color: transparent !important;
		right: -5px;
		top: calc(50% - 5px);
		margin-left: 0;
		margin-right: 0;
	}

	.tooltip.popover .popover-inner {
		background: #f9f9f9;
		color: black;
		padding: 10px 25px;
		border-radius: 5px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	.tooltip.popover .popover-arrow {
		border-color: #f9f9f9;
	}

	.tooltip[aria-hidden='true'] {
		visibility: hidden;
		opacity: 0;
		transition: opacity .15s, visibility .15s;
	}

	.tooltip[aria-hidden='false'] {
		visibility: visible;
		opacity: 1;
		transition: opacity .15s;
	}


	.tooltip.popover .nav__menu__flag__popover-arrow {
		border-color: #f9f9f9;
		margin-left: 20px;
	}

	.tooltip.popover .nav__menu__flag__popover-wrapper {
		margin-left: 15px;
	}
</style>