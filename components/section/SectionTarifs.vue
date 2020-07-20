<template>
	<div class="tarifs flex mt-16">
		<section-tarifs-item v-for="(tarif, i) in tarifs" :key="i" :tarif="tarif" />
		<div class="tarifs__row w-1/4 flex flex-col">
			<section-tarifs-item class="w-full mb-4" :tarif="tarifMaintenance" :sur-mesure="false" />
			<section-tarifs-item class="w-full" :tarif="tarifSpecifique" :sur-mesure="false" />
		</div>
	</div>
</template>

<script>
	import SectionTarifsItem from "@/components/section/SectionTarifsItem"
	import IconPlus from "@/components/icon/IconPlus"

	export default {
		name: "section-tarifs",
		components: {
			SectionTarifsItem
		},
		data() {
			return {
				tarifs: [
					{
						title: "Intégration web",
						subtitle: "Site OnePage",
						priceText: "À partir de",
						price: "899",
						priceSup: "*",
						priceSupDevise: "€",
						buttonLabel: "Demander un devis",
						details: [
							{
								icon: IconPlus,
								title: "Charte graphique à partir d'une maquette",
								class: ""
							},
							{
								icon: IconPlus,
								title: "1 page",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Interface administrateur STANDARD",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Mise en place du contenu (textes & images)",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Formulaire de contact",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Site responsive (adapté tous supports)",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Optimisation du référencement",
								class: ""
							},
							{
								icon: IconPlus,
								title: " Statistiques de visite",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Formation utilisation du site",
								class: "font-bold"
							}
						]
					},
					{
						title: "Intégration web",
						subtitle: "Site vitrine",
						priceText: "À partir de",
						price: "1200",
						priceSup: "**",
						priceSupDevise: "€",
						buttonLabel: "Demander un devis",
						details: [
							{
								icon: IconPlus,
								title: "Charte graphique à partir d'une maquette",
								class: ""
							},
							{
								icon: IconPlus,
								title: "5 pages",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Interface administrateur SUR-MESURE",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Mise en place du contenu (textes & images)",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Formulaire de contact & map",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Site responsive (adapté tous supports)",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Optimisation du référencement et des performances ",
								class: ""
							},
							{
								icon: IconPlus,
								title: " Statistiques de visite",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Formation utilisation du site",
								class: "font-bold"
							}
						]
					},
					{
						title: "Plateforme",
						subtitle: "E-commerce",
						priceText: "À partir de",
						price: "2500",
						priceSup: "***",
						priceSupDevise: "€",
						buttonLabel: "Demander un devis",
						details: [
							{
								icon: IconPlus,
								title: "Charte graphique à partir d'une maquette",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Paiement sécurisé",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Interface administrateur SUR-MESURE",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Mise en place du contenu (textes & images)",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Formulaire de contact & map",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Site responsive (adapté tous supports)",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Optimisation du référencement et des performances ",
								class: ""
							},
							{
								icon: IconPlus,
								title: " Statistiques de visite",
								class: ""
							},
							{
								icon: IconPlus,
								title: "Formation utilisation du site",
								class: "font-bold"
							}
						]
					},
				],
				tarifMaintenance: {
					title: "Forfait",
					subtitle: "maintenance",
					price: "300",
					priceSup: "****",
					priceSupDevise: "€ / an",
					buttonLabel: "Me contacter",
					details: [
						{
							icon: IconPlus,
							title: "Mises à jour site internet",
							class: ""
						},
						{
							icon: IconPlus,
							title: "Petites modifications graphiques ou de contenu",
							class: ""
						},
						{
							icon: IconPlus,
							title: "Optimisation performances",
							class: ""
						}
					]
				},
				tarifSpecifique: {
					title: "Développements",
					subtitle: "spécifiques",
					priceText: "Taux journalier moyen",
					price: "300",
					priceSup: "******",
					priceSupDevise: "€ / Jour",
					buttonLabel: "Me contacter"
				}
			}
		}
	}
</script>

<style>

</style>