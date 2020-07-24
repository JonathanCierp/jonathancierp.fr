<template>
	<footer class="core-footer p-6 flex items-center">
		<div class="flex-grow">
			<nuxt-link class="font-semibold text-white text-lg" to="/">
				{{ $t("footer.policy") }}
			</nuxt-link>
		</div>
		<div class="flex-grow text-center">
			<span class="font-semibold text-white text-lg">Jonathan CIERP © 2018-2020</span>
		</div>
		<div class="flex flex-grow justify-end">
			<a class="mx-2" href="https://www.facebook.com/jonathancierpdev">
				<icon-facebook />
			</a>
			<a class="mx-2" href="https://fr.linkedin.com/in/jonathan-cierp">
				<icon-linkedin />
			</a>
			<!--<nuxt-link to="/fb">
				twitter
			</nuxt-link>-->
			<a class="mx-2" href="https://github.com/JonathanCierp">
				<icon-github />
			</a>
		</div>
	</footer>
</template>

<script>
	import IconLinkedin from "@/components/icon/IconLinkedin"
	import IconGithub from "@/components/icon/IconGithub"
	import IconFacebook from "@/components/icon/IconFacebook"

	export default {
		name: "core-footer",
		components: {
			IconLinkedin,
			IconGithub,
			IconFacebook
		}
	}
</script>

<style>
	.core-footer {
		height: 70px;
		background-color: #1ED0AD;
	}
</style>