<template>
  <div>
		<div class="header-background-image w-full">
			<header class="nav container mx-auto flex justify-between items-center text-white py-4">
				<div class="nav__brand flex items-center">
					<div class="nav__brand__image w-16 h-16 rounded-full"></div>
					<div class="nav__brand__text ml-6">
						<span class="font-semibold">Jonathan CIERP</span>
					</div>
				</div>
				<div class="nav__menu">
					<ul class="flex items-center">
						<li v-for="menu in menus">
							<nuxt-link class="mx-2" :to="menu.to">
								{{ menu.label }}
							</nuxt-link>
						</li>
						<li class="ml-2 w-8 h-8 rounded-full bg-black"></li>
					</ul>
				</div>
			</header>
			<p>a</p>
			<p>a</p>
			<p>a</p>
			<p>a</p>
			<p>a</p>
			<p>a</p>
			<p>a</p>
		</div>
    <Nuxt />
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
		<p>a</p>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				menus: [
					{
						to: "#presentation",
						label: "Présentation"
					},
					{
						to: "#mes_services",
						label: "Mes services"
					},
					{
						to: "#realisations",
						label: "Réalisations"
					},
					{
						to: "#tarifs",
						label: "Tarifs"
					},
					{
						to: "#contact",
						label: "Contact"
					}
				]
			}
		}
	}
</script>

<style>
	body {
		background-color: #F5F5F5;
	}

	.header-background-image {
		background-size: 100%;
		height: 550px;
		background-position: 0% 100%;
		background-repeat: no-repeat;
		background-image: url("~@/assets/img/background.png");
	}

	.nav .nav__brand .nav__brand__image {
		background-image: url("~@/assets/img/background.png");
	}
</style>