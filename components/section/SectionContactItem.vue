<template>
	<div class="contact-item flex flex-col mb-6 w-1/2 md:w-full">
		<div class="content-item__row flex items-center">
			<div class="content-item__icon mr-6">
				<component :is="icons[contact.icon]" />
			</div>
			<div class="content-item__title sm:text-xl">{{ contact.title }}</div>
		</div>
		<div class="content-item__description mt-4 text-sm sm:text-base">{{ contact.content }}</div>
		<div class="content-item__separator mt-6" :class="`${contact.title === 'Siret' ? 'md:hidden' : ''}`"></div>
	</div>
</template>

<script>
	export default {
		name: "section-contact-item",
		props: {
			contact: {
				type: Object,
				required: true
			},
			icons: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style>
	.contact-item .content-item__description {
		margin-left: 35px;
		color: #818181;
	}
	.contact-item .content-item__separator {
		height: 1px;
		background-color: #A1A1A1;
		margin-left: 35px;
	}

	@media only screen and (min-width: 640px) {
		.contact-item .content-item__description {
			margin-left: 53px;
		}
		.contact-item .content-item__separator {
			margin-left: 53px;
		}
	}
</style>