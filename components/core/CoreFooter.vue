<template>
	<footer class="core-footer p-6 flex items-center">
		<div class="flex-grow">
			<nuxt-link class="font-semibold text-white text-lg" to="/policy">
				Mentions légales
			</nuxt-link>
		</div>
		<div class="flex-grow text-center">
			<span class="font-semibold text-white text-lg">Jonathan CIERP © 2018-2020</span>
		</div>
		<div class="flex flex-grow justify-end">
			<!--<nuxt-link to="/fb">
				facebook
			</nuxt-link>-->
			<nuxt-link class="mx-2" to="/fb">
				<icon-linkedin />
			</nuxt-link>
			<!--<nuxt-link to="/fb">
				twitter
			</nuxt-link>-->
			<nuxt-link class="mx-2" to="/fb">
				<icon-github />
			</nuxt-link>
		</div>
	</footer>
</template>

<script>
	import IconLinkedin from "@/components/icon/IconLinkedin"
	import IconGithub from "@/components/icon/IconGithub"

	export default {
		name: "core-footer",
		components: {
			IconLinkedin,
			IconGithub
		}
	}
</script>

<style>
	.core-footer {
		height: 70px;
		background-color: #1ED0AD;
	}
</style>