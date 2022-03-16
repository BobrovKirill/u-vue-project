<template>
  <form class="form" @submit.prevent>
    <h5 class="form__title">Новый пост</h5>
    <my-input
			v-focus
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <my-input
      v-model="post.text"
      type="text"
      placeholder="Описание"
    />
    <my-button @click="creactePost">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        text: '',
      },
    };
  },
  methods: {
    creactePost() {
      this.post.id = Date.now();
			this.$emit('create', this.post)
			this.post = {
				title: '',
        text: '',
			}
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  &__title {
    font-size: 24px;
  }
  button {
    width: 25%;
    align-self: flex-end;
  }
}
</style>
