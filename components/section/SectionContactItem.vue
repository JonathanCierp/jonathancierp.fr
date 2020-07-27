<template>
	<div class="contact-item flex flex-col mb-6">
		<div class="content-item__row flex items-center">
			<div class="content-item__icon mr-6">
				<component :is="icons[contact.icon]" />
			</div>
			<div class="content-item__title text-xl">{{ contact.title }}</div>
		</div>
		<div class="content-item__description mt-4">{{ contact.content }}</div>
		<div v-if="contact.title !== 'Siret'" class="content-item__separator mt-6"></div>
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
		margin-left: 53px;
		color: #818181;
	}
	.contact-item .content-item__separator {
		height: 1px;
		background-color: #A1A1A1;
		margin-left: 53px;
	}
</style>