<template>
	<div>
		<carousel class="mt-16 w-full" navigation-enabled :pagination-enabled="false">
			<slide class="flex justify-center cursor-pointer" v-for="realisation in realisations" :key="realisation.title">
				<div class="relative">
					<div class="ribbon ribbon-top-left z-10">
						<span class="text-xs font-bold">{{ realisation.title }}</span>
					</div>
					<img @click="openModal(realisation)" class="slider-image" :src="resolveImage(realisation.image)" :alt="realisation.title">
				</div>
			</slide>
		</carousel>
		<div class="modal opacity-0 fixed w-full h-full top-0 left-0 flex items-center justify-center z-50" :class="`${show ? 'modal-active' : 'pointer-events-none'}`">
			<div v-if="show" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 pointer-events-none"></div>
			<div class="modal-container bg-white w-1/2 mr-0 h-full mx-auto shadow-lg z-50 overflow-y-auto">
				<!-- Add margin if you want to see some of the overlay behind the modal-->
				<div v-if="show"  class="modal-content py-4 text-left px-6">
					<!--Title-->
					<div class="flex justify-between items-center pb-3">
						<p class="text-2xl font-bold uppercase">{{ realisation.longTitle }}</p>
						<div @click="closeModal" class="modal-close cursor-pointer z-50">
							<svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
								<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
							</svg>
						</div>
					</div>

					<!--Body-->
					<div class="modal-content">
						<div class="modal-content__image flex justify-center">
							<img :src="resolveImage(realisation.image)" :alt="realisation.title">
						</div>
						<div class="modal-content__section mt-4 flex">
							<div class="modal-content__section__dev w-3/5">
								<h3 class="font-bold text-xl">{{ realisation.sectionDev }}</h3>
								<div class="modal-content__section__separator"></div>
								<div class="modal-content__section__dev__items">
									<div class="modal-content__section__dev__item">
										<div class="modal-content__section__dev__item__icon">

										</div>
										<div class="modal-content__section__dev__item__text">

										</div>
									</div>
								</div>
							</div>
							<div class="modal-content__section__info w-2/5">
								<h3 class="font-bold text-xl">{{ realisation.sectionInfo }}</h3>
								<div class="modal-content__section__separator"></div>

							</div>
						</div>
					</div>

					<!--Footer-->
					<!--<div class="flex justify-end pt-2">
						<button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
						<button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
					</div>-->
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "section-realisations",
		data() {
			return {
				show: false,
				realisations: [
					{
						id: 1,
						longTitle: "Poissonnerie Moncayo",
						title: "Moncayo",
						image: "poissonnerie-moncayo.png",
						sectionDev: "Développement complet",
						sectionInfo: "Information projet"
					}
				],
				realisation: {}
			}
		},
		methods: {
			resolveImage(imageName){
				return require(`@/assets/img/realisations/${imageName}`)
			},
			openModal(realisation) {
				document.querySelector("body").classList.add("modal-active")
				this.show = true
				this.realisation = realisation
			},
			closeModal() {
				document.querySelector("body").classList.remove("modal-active")
				this.show = false
				this.realisation = {}
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

	.modal {
		transition: opacity .3s ease-in-out;
	}

	.modal.modal-active {
		opacity: 1;
	}

	.modal .modal-container {
		transition: transform .5s;
		transform: translateX(100%);
	}

	.modal.modal-active .modal-container {
		transform: translateX(0);
	}

	.modal .modal-content .modal-content__image img {
		height: 300px;
	}
</style>