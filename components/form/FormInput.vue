<template>
	<div class="form-input-text flex items-center relative justify-center">
		<component class="pointer-events-none absolute inset-y-0 left-0 flex items-center" :is="iconLeft" />
		<input autocomplete="off" :placeholder="placeholder" :required="required" :type="type"
			class="transition-colors duration-400 ease-in-out bg-gray-200 shadow appearance-none rounded w-full py-4 px-12
			 text-gray-700 leading-tight focus:shadow-outline">
		<span v-if="required" class="pointer-events-none absolute inset-y-0 right-0 flex items-center">*</span>
	</div>
</template>

<script>
	export default {
		name: "form-input-text",
		props: {
			iconLeft: {
				type: Object
			},
			placeholder: {
				type: String
			},
			required: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: "text"
			}
		}
	}
</script>

<style>
	.form-input-text svg {
		color: #718096;
		margin: 17px 16px;
	}

	.form-input-text svg path {
		fill: #718096;
	}

	.form-input-text span {
		font-weight: bold;
		font-size: 1.1rem;
		color: #E74C3C;
		margin: 0 16px;
	}
</style>