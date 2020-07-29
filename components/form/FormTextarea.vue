<template>
	<div class="form-input-textarea relative" :class="`${error ? 'form-input-textarea-error' : ''}`">
		<textarea @input="onInput" @blur="onBlur" autocomplete="off" :placeholder="placeholder"
							class="transition-colors duration-400 ease-in-out bg-gray-200 shadow appearance-none rounded w-full py-4 pl-4 pr-10
			 text-gray-700 leading-tight focus:shadow-outline" rows="7"/>
		<span v-if="required" class="pointer-events-none absolute right-0 flex items-center">*</span>
	</div>
</template>

<script>
	export default {
		name: "form-textarea",
		props: {
			value: {
				type: String,
				default: null
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
				if (this.required) {
					this.error = !this.validate()
				}
			},
			onInput(e) {
				if (this.required) {
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
	.form-input-textarea span {
		font-weight: bold;
		font-size: 1.1rem;
		color: #E74C3C;
		margin: 0 16px;
		top: 18px;
	}

	.form-input-textarea.form-input-textarea-error textarea {
		border: 2px solid #E74C3C;
	}

	.form-input-textarea.form-input-textarea-error textarea:focus {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}

	.form-input-textarea.form-input-textarea-error textarea:hover {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}
</style>