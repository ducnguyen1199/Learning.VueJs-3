<template>
  <h1>POST LIST</h1>
  <p v-if="error" :style="{ color: 'red' }">{{ error }}</p>
  <p
    v-if="isLoading"
    :style="{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }"
  >
    loading....
  </p>
  <p v-if="!isLoading && !posts.length">no data avaiable</p>
  <div v-else>
    <ul v-for="(item, index) in posts" :key="index">
      <PostItem :post="item" @handleDelete="handleDelete" />
    </ul>
  </div>
</template>

<script>
import { ref, watch } from "@vue/runtime-core";
import PostItem from "../components/PostItem.vue";
import { deletePost, getPosts } from "../composables";
export default {
  components: { PostItem },
  name: "postList",
  setup() {
    const isLoading = ref(true);
    const { posts, error, load } = getPosts(isLoading);
    load();

    const handleDelete = (id) => {
      isLoading.value = true;
      const { errorDel, del } = deletePost(id);
      error.value = errorDel.value;
      del().then(() => load());
    };

    watch(posts, () => {
      isLoading.value = false;
    });

    return { posts, error, handleDelete, isLoading };
  },
};
</script>
