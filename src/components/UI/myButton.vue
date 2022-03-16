<template>
	<button><slot></slot></button>
</template>

<script>
export default {
	name: 'my-button'
}
</script>

<style scoped>
button {
 padding: 5px 10px;
 border: 1px solid tomato;
}
</style>