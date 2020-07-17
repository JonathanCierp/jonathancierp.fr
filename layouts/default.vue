<template>
  <div>
		<div class="header-background-color">
			<div class="header-background-image absolute w-full"></div>
			<header class="nav container mx-auto flex justify-between text-white py-4">
				<div class="nav__brand flex items-center">
					<div class="nav__brand_image w-16 h-16 rounded-full"></div>
					<div class="nav__brand__text">
						<span class="font-semibold">Jonathan CIERP</span>
					</div>
				</div>
				<div class="nav__menu">
					b
				</div>
			</header>
		</div>
    <Nuxt />
  </div>
</template>

<style>
	.header-background-color, .header-background-image {
		height: 70vh;
	}
	.header-background-color {
		background-color: #575FCF;
	}
	.header-background-image {
		background-position: 60% 60%;
		background-image: url("~@/assets/img/background.jpg");
		opacity: .2;
	}

	.nav .nav__brand .nav__brand_image {
		background-position: 60% 60%;
		background-image: url("~@/assets/img/background.jpg");
	}
</style>