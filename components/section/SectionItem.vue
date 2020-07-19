<template>
	<section id="mes-services" class="mes-services mt-16">
		<h1 class="text-5xl font-bold text-center">Mes services</h1>
		<div class="mes-services__divider mt-6 flex justify-center items-center">
			<div></div>
			<icon-circle class="mx-4" />
			<div></div>
		</div>
	</section>
</template>

<script>
	import IconCircle from "@/components/icon/IconCircle"

	export default {
		name: "section-item",
		components: {
			IconCircle
		}
	}
</script>

<style>
	.mes-services .mes-services__divider div:first-child{
		width: 50%;
		height: 3px;
		background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), to(#000));
		background-image: -webkit-linear-gradient(180deg, transparent, #000);
		background-image: -moz-linear-gradient(180deg, transparent, #000);
		background-image: -o-linear-gradient(180deg, transparent, #000);
		background-image: linear-gradient(90deg, transparent, #000);
	}
	.mes-services .mes-services__divider div:last-child {
		width: 50%;
		height: 3px;
		background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#000), to(transparent));
		background-image: -webkit-linear-gradient(180deg, #000, transparent);
		background-image: -moz-linear-gradient(180deg, #000, transparent);
		background-image: -o-linear-gradient(180deg, #000, transparent);
		background-image: linear-gradient(90deg, #000, transparent);
	}
</style>