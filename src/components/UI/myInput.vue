<template>
	<input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
	name: 'my-input',
	props: {
		modelValue: [String, Number],
	},
	methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		}
	}
}
</script>

<style>
.input {
    padding: 5px 10px;
    border: 1px solid teal;
  }
</style>