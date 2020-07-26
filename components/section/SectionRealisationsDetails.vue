<template>
	<div class="modal opacity-0 fixed w-full h-full top-0 left-0 flex items-center justify-center z-50"
			 :class="`${show ? 'modal-active' : 'pointer-events-none'}`">
		<div v-if="show" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" @click="closeModal"></div>
		<div class="modal-container bg-white w-1/2 mr-0 h-full mx-auto shadow-lg z-50 overflow-y-auto">
			<!-- Add margin if you want to see some of the overlay behind the modal-->
			<div v-if="show" class="modal-content py-4 text-left px-6">
				<!--Title-->
				<div class="flex justify-between items-center pb-3">
					<p class="text-2xl font-bold uppercase">{{ realisation.longTitle }}</p>
					<div @click="closeModal" class="modal-close cursor-pointer z-50">
						<svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
								 viewBox="0 0 18 18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
						</svg>
					</div>
				</div>

				<!--Body-->
				<div class="modal-content">
					<div class="modal-content__image flex justify-center">
						<img :src="resolveImage(realisation.image)" :alt="realisation.title">
					</div>
					<div class="modal-content__section mt-4 flex">
						<div class="modal-content__section__dev w-3/5 mr-8">
							<h3 class="font-bold text-xl">{{ realisation.dev.title }}</h3>
							<div class="modal-content__section__separator mt-1 mb-4"></div>
							<div class="modal-content__section__dev__items">
								<div class="modal-content__section__dev__item flex items-center my-1"
										 v-for="detail in realisation.dev.details" :key="detail.title">
									<div class="modal-content__section__dev__item__icon w-6">
										<icon-tick/>
									</div>
									<div class="modal-content__section__dev__item__text text-sm">
										{{ detail.title }}
									</div>
								</div>
							</div>
						</div>
						<div class="modal-content__section__info w-2/5">
							<h3 class="font-bold text-xl">{{ realisation.info.title }}</h3>
							<div class="modal-content__section__separator mt-1 mb-4"></div>
							<div class="modal-content__section__info__item flex items-center my-1"
									 v-for="detail in realisation.info.details" :key="detail.title">
								<div class="modal-content__section__info__item__icon w-8">
									<component :is="icons[detail.icon]"/>
								</div>
								<div class="modal-content__section__info__item__text text-sm">
									{{ detail.title }} : <span :class="detail.class">{{ detail.value }}</span>
								</div>
							</div>
							<div class="modal-content__section__separator my-4"></div>
							<div class="modal-content__section__info__tags flex flex-wrap">
								<div class="modal-content__section__info__tag text-xs py-1 px-3 text-white my-1 mr-1 cursor-pointer" v-for="tag in realisation.info.tags" :key="tag.title">
									<span>{{ tag.title }}</span>
								</div>
							</div>
							<div class="modal-content__section__separator my-4"></div>
							<div class="modal-content__section__info__button">
								<a :href="realisation.to" class="text-sm text-white font-semibold py-1 px-4">Visiter le site</a>
							</div>
						</div>
					</div>
					<div class="modal-content__swap">
						<button v-if="hasLeft" :class="`${hasLeft ? 'opacity-1' : 'opacity-0'}`" @click="previousRealisation" class="py-2 px-5 mr-4">
							<icon-left />
						</button>
						<button v-if="hasRight" :class="`${hasRight ? 'opacity-1' : 'opacity-0'}`" @click="nextRealisation" class="py-2 px-5">
							<icon-right />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import IconTick from "@/components/icon/IconTick"
	import IconRight from "@/components/icon/IconRight"
	import IconLeft from "@/components/icon/IconLeft"

	export default {
		name: "section-realisations-details",
		components: {
			IconRight,
			IconLeft,
			IconTick
		},
		props: {
			value: {
				type: Boolean
			},
			realisations: {
				type: Array
			},
			realisation: {
				type: Object
			},
			icons: {
				type: Object
			}
		},
		watch: {
			value: function(v) {
				this.value = v
				this.show = v
			},
			realisation: function(v) {
				this.realisation = v
			}
		},
		data() {
			return {
				show: this.value
			}
		},
		methods: {
			closeModal() {
				this.$emit("close")
			},
			resolveImage(imageName) {
				return require(`@/assets/img/realisations/${imageName}`)
			},
			previousRealisation() {
				this.$emit("previous", this.realisation)
			},
			nextRealisation() {
				this.$emit("next", this.realisation)
			}
		},
		computed: {
			hasLeft: {
				get() {
					return this.realisations[this.realisations.indexOf(this.realisation) - 1]
				}
			},
			hasRight: {
				get() {
					return this.realisations[this.realisations.indexOf(this.realisation) + 1]
				}
			}
		}
	}
</script>

<style>
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
		height: 260px;
	}

	.modal .modal-content .modal-content__section .modal-content__section__separator {
		height: 1px;
		background-color: #A1A1A1;
	}

	.modal .modal-content .modal-content__section .modal-content__section__dev__item__text, .modal .modal-content .modal-content__section .modal-content__section__info__item__text {
		color: #818181;
	}

	.modal .modal-content .modal-content__section .modal-content__section__info__tags .modal-content__section__info__tag {
		background-color: #1ABC9C;
	}

	.modal .modal-content .modal-content__section .modal-content__section__info__tags .modal-content__section__info__tag:hover {
		opacity: .85;
	}

	.modal .modal-content .modal-content__section .modal-content__section__info__button a{
		background-color: #1ABC9C;
		border: 4px solid #1ED0AD;
	}

	.modal .modal-content .modal-content__section .modal-content__section__info__button:hover a{
		background-color: #1ED0AD;
	}

	.modal .modal-content .modal-content__swap button{
		background-color: #1ABC9C;
		border: 4px solid #1ED0AD;
	}

	.modal .modal-content .modal-content__swap button:hover{
		background-color: #1ED0AD;
	}
</style>