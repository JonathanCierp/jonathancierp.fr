<template>
	<div>
		<carousel class="mt-16 w-full" navigation-enabled :pagination-enabled="false">
			<slide class="flex justify-center cursor-pointer" v-for="item in items" :key="item.title">
				<div class="relative">
					<div class="ribbon ribbon-top-left z-10">
						<span class="text-xs font-bold">{{ item.title }}</span>
					</div>
					<img @click="openModal(item)" class="slider-image" :src="resolveImage(item.image)"
							 :alt="item.title">
				</div>
			</slide>
		</carousel>
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
	.slider-image {
		margin-top: -19px;
	}

	.slider-image:hover {
		opacity: 0.9;
	}
</style>