<template>
	<div class="form-input-text flex items-center relative justify-center" :class="`${error ? 'form-input-text-error' : ''}`">
		<component class="pointer-events-none absolute inset-y-0 left-0 flex items-center" :is="iconLeft" />
		<input @input="onInput" @blur="onBlur" autocomplete="off" :placeholder="placeholder" :type="type"
			class="transition-colors duration-400 ease-in-out bg-gray-200 shadow appearance-none rounded w-full py-4 px-12
			 text-gray-700 leading-tight focus:shadow-outline">
		<span v-if="required" class="pointer-events-none absolute inset-y-0 right-0 flex items-center">*</span>
	</div>
</template>

<script>
	export default {
		name: "form-input-text",
		props: {
			value: {
				type: String,
				default: null
			},
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
		},
		data() {
			return {
				error: false
			}
		},
		methods: {
			onBlur() {
				if(this.required) {
					this.error = !this.validate()
				}
			},
			onInput(e) {
				if(this.required) {
					this.error = !this.validate(e.target.value)
				}

				this.$emit("input", e.target.value)
			},
			validate(value) {
				const v = value || this.value
				this.error = !!!v

				return !!v
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

	.form-input-text.form-input-text-error input {
		border: 2px solid #E74C3C;
	}

	.form-input-text.form-input-text-error input:focus {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}

	.form-input-text.form-input-text-error input:hover {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}
</style>