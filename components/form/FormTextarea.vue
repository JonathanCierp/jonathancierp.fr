<template>
	<div class="form-input-textarea relative">
		<textarea autocomplete="off" :placeholder="placeholder" :required="required"
			class="transition-colors duration-400 ease-in-out bg-gray-200 shadow appearance-none rounded w-full py-4 pl-4 pr-10
			 text-gray-700 leading-tight focus:shadow-outline" rows="7" />
		<span v-if="required" class="pointer-events-none absolute right-0 flex items-center">*</span>
	</div>
</template>

<script>
	export default {
		name: "form-textarea",
		props: {
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
	.form-input-textarea span {
		font-weight: bold;
		font-size: 1.1rem;
		color: #E74C3C;
		margin: 0 16px;
		top: 18px;
	}
</style>