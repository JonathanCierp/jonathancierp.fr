<template>
	<div class="tarifs__item bg-white w-1/4 mr-6 flex flex-col items-center">
		<div class="tarifs__item__title font-bold text-3xl">
			<h2>{{ tarif.title }}</h2>
		</div>
		<div class="tarifs__item__subtitle font-bold text-2xl">
			<h3>{{ tarif.subtitle }}</h3>
		</div>
		<div class="tarifs__item__separator my-4"></div>
		<div class="tarifs__item__price-text">
			<div v-if="tarif.title === 'Forfait'" class="flex">
				<span class="font-bold text-xl">35</span>
				<span class="tarifs__item__price__devise font-bold ml-1">€ / heure</span>
				<span class="tarifs__item__price__sup ml-2">**</span>
				<span class="font-bold text-xl ml-2">Ou</span>
			</div>
			<span v-else>{{ tarif.priceText }}</span>
		</div>
		<div class="tarifs__item__price flex">
			<div class="tarifs__item__price__text font-bold text-5xl">
				<h3>{{ tarif.price }}</h3>
			</div>
			<div class="tarifs__item__price__devise font-bold text-xl mt-2">
				<span>{{ tarif.priceSupDevise }}</span>
			</div>
			<div class="tarifs__item__price__sup ml-2 mt-2">
				<span>{{ tarif.priceSup }}</span>
			</div>
		</div>
		<div class="tarifs__item__separator" ></div>
		<div v-if="surMesure" class="tarifs__item__detail text-center text-sm font-semibold">
			<span>Développé SUR-MESURE</span> <br>
			<span>(Codage à la main)</span>
		</div>
		<div class="tarifs__item__details w-full mt-4">
			<div class="tarifs__item__details__item flex items-center h-12" v-for="detail in tarif.details" :key="detail.title">
				<div class="tarifs__item__details__item__icon w-1/5 text-center">
					<component class="inline" :is="detail.icon" />
				</div>
				<div class="tarifs__item__details__item__text w-4/5" :class="detail.class">
					{{ detail.title }}
				</div>
			</div>
		</div>
		<div class="tarifs__item__button" :class="`${surMesure ? 'my-10' : 'my-5'}`">
			<button class="text-white font-semibold py-3 px-8">{{ tarif.buttonLabel }}</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "section-tarifs-item",
		props: {
			tarif: {
				type: Object,
				required: true
			},
			surMesure: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style>
	.tarifs__item .tarifs__item__separator {
		height: 2px;
		background-color: #1ABC9C;
		width: 50%;
	}

	.tarifs__item .tarifs__item__price-text {
		color: #818181;
	}

	.tarifs__item .tarifs__item__details .tarifs__item__details__item__text {
		font-size: .85rem;
	}

	.tarifs__item__details__item:nth-child(odd){
		background-color: #F1F1F1;
	}

	.tarifs .tarifs__item .tarifs__item__button button {
		background-color: #1ABC9C;
		border: 4px solid #1ED0AD;
	}

	.tarifs .tarifs__item .tarifs__item__button button:hover {
		background-color: #1ED0AD;
	}
</style>