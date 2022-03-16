<template>
	<div class="post">
		<div class="post__body">
			<div>{{post.id}}</div>
			<div class="post__title">{{ post.title }}</div>
			<div class="post__text">{{ post.body }}</div>
		</div>
		<div class="post__btns">
			<my-button @click="$router.push(`/posts/${post.id}`)" class="post__btn">Открыть</my-button>
			<my-button @click="$emit('remove', post) " class="post__btn">Удалить</my-button>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		post: {
			type: Object,
			required: true,
		}
	}
}
</script>

<style lang="scss" scoped>
.post {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 2px solid tomato;
	border-radius: 7px;
	width: 100%;
	padding: 5px 15px;
	&__title {
		font-size: 24px;
		font-weight: bold;
	}
	&__text {
		font-style: italic;
	}
	&__btns {
		display: flex;
		gap: 5px;
	}
}
</style>