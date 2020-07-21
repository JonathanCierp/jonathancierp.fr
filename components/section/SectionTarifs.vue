<template>
	<div class="tarifs mt-16">
		<div class="tarifs__devis bg-white flex items-center justify-center h-16 font-bold text-xl">
			<span>Une idée, un projet ? N'hésitez pas à <span>demander un devis</span> ! [GRATUIT]</span>
		</div>
		<div class="tarifs__ items flex mt-8">
			<section-tarifs-item class="hover:shadow-md transition-shadow duration-300 ease-in-out" v-for="(tarif, i) in tarifs" :key="i" :tarif="tarif" />
			<div class="tarifs__row w-1/4 flex flex-col">
				<section-tarifs-item class="hover:shadow-md w-full mb-4 transition-shadow duration-300 ease-in-out" :tarif="tarifMaintenance" :sur-mesure="false" />
				<section-tarifs-item class="hover:shadow-md w-full transition-shadow duration-300 ease-in-out" :tarif="tarifSpecifique" :sur-mesure="false" />
			</div>
		</div>
		<div class="tarifs__annotations text-xs mt-2">
			<span class="underline font-bold">L'ensemble des tarifs indiqués sont H.T.</span>
			<span>
				<span class="font-bold">Droit d'auteur & propriété intellectuelle</span> :
				Vous êtes à la fin du projet, propriétaire de l'ensemble des sources (fichiers) composant celui-ci.
				<span class="font-bold">Paiment possible en plusieurs fois.</span>
			</span> <br>
			<span>* <span class="font-bold">Prix à titre informatif</span> : Changement possible selon les demandes et les choix du client.</span> <br>
			<span>** Estimation du temps de travail appuyé par un devis.</span> <br>
			<span>***  Maintenance annuelle (engagement 12 mois).</span> <br>
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
					priceSup: "***",
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
					priceSup: "",
					priceSupDevise: "€ / Jour",
					buttonLabel: "Me contacter"
				}
			}
		}
	}
</script>

<style>
	.tarifs .tarifs__devis span span {
		color: #1ABC9C;
	}

	.tarifs .tarifs__annotations  {
		color: #818181;
	}
</style>