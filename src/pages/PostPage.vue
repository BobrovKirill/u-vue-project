<template>
  <div >
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск...."></my-input>
    <div class="buttons">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      <!-- <my-button @click="fetchPosts">Показать запрос</my-button> -->
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="creactePost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Идеи загрузка....</div>
    <div v-intersection="{loaderMorePosts, page, totalPages}" class="observer"></div>
    <!-- <div class="page__wrapper">
      <div
        class="page"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
          'current-page': pageNumber === page,
        }"
				@click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import myButton from '@/components/UI/myButton.vue';
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
    myButton,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      title: '',
      text: '',
      searchQuery: '',
      selectedSort: '',
      page: 1,
      limit: 10,
      totalPages: 2,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ],
    };
  },
  methods: {
    creactePost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage (pageNumber) {
    // 	this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
          const responce = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            responce.headers['x-total-count'] / this.limit
          );
          this.posts = responce.data;
          this.isPostLoading = false;
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
  	async loaderMorePosts() {
  	  try {
  	    this.page += 1;
  	    const responce = await axios.get(
  	      'https://jsonplaceholder.typicode.com/posts',
  	      {
  	        params: {
  	          _page: this.page,
  	          _limit: this.limit,
  	        },
  	      }
  	    );
  	    this.totalPages = Math.ceil(
  	      responce.headers['x-total-count'] / this.limit
  	    );
  	    this.posts = [...this.posts, ...responce.data];
  	  } catch (e) {
  	    console.log(e);
  	  }
  	},
	},
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    this.fetchPosts();
  //   const options = {
  //     rootMargin: '0px',
  //     threshold: 1.0,
  //   };
  //   const callback = (entries, observer) => {
  //     if (entries[0].isIntersecting && this.page < this.totalPages) {
  //       this.loaderMorePosts();
  //     }
  //   };
  //   const observer = new IntersectionObserver(callback, options);
  //   observer.observe(this.$refs.observer);
  },
  watch: {
    // page() {
    // 	this.fetchPosts()
    // }
  },
};
</script>

<style lang="scss">


.buttons {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  gap: 5px;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
  background-color: green;
}
</style>
