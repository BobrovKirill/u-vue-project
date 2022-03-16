<template>
	<div class="navbar">
		<p @click="$router.push('/')">kek project</p>
		<div class="navbar__btns">
			<my-button @click="$router.push('/posts')">Список постов</my-button>
			<my-button @click="$router.push('/about')">О сайте</my-button>
		</div>
	</div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
	.navbar {
		height: 50px;
		background-color: teal;
		box-shadow: 2px 2px 4px gray;
		display: flex;
		justify-content: space-between;
		align-content: center;
		padding: 5px 25px;
		align-items: center;
		text-align: center;
		&__btns {
			display: flex;
			gap: 25px;
		}
	}
</style>