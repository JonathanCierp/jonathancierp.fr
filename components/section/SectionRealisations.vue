<template>
	<div>
		<div class="realisations mt-16 w-full flex flex-wrap">
			<div class="realisations__item flex justify-center cursor-pointer relative px-6 sm:w-1/2 md:w-1/3 xl:w-1/4 pr-6 my-4" v-for="item in items" :key="item.title" @click="openModal(item)" >
				<div class="relative">
					<div class="ribbon ribbon-top-left z-10">
						<span class="text-xs font-bold">{{ item.title }}</span>
					</div>
					<img class="slider-image" :src="resolveImage(item.image)"
							 :alt="item.title">
				</div>
			</div>
		</div>
		<section-realisations-details :icons="icons" v-model="show" :realisation="item" @previous="previousRealisation" @next="nextRealisation"
			:realisations="$t('body.section.realisations.items')" @close="closeModal" />
	</div>
</template>

<script>
	import SectionRealisationsDetails from "@/components/section/SectionRealisationsDetails"
	import IconCalendar from "@/components/icon/IconCalendar"
	import IconTags from "@/components/icon/IconTags"

	export default {
		name: "section-realisations",
		components: {
			SectionRealisationsDetails
		},
		data() {
			return {
				show: false,
				icons: {
					"icon-calendar": IconCalendar,
					"icon-tags": IconTags
				},
				items: this.$t('body.section.realisations.items'),
				item: {}
			}
		},
		methods: {
			resolveImage(imageName) {
				return require(`@/assets/img/realisations/${imageName}`)
			},
			openModal(item) {
				document.querySelector("body").classList.add("modal-active")
				this.show = true
				this.item = item
			},
			closeModal() {
				document.querySelector("body").classList.remove("modal-active")
				this.show = false
			},
			previousRealisation(item) {
				this.item = this.items[this.items.indexOf(item) - 1]
			},
			nextRealisation(item) {
				this.item = this.items[this.items.indexOf(item) + 1]
			}
		}
	}
</script>

<style>
	.realisations__item:hover {
		opacity: 0.9;
	}
</style>