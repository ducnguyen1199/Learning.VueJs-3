<template>
  <li>
    {{ post.id }} - {{ post.title }} - {{ snippet }} -
    <button @click="this.$emit('handleDelete', post.id)">x</button>
  </li>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["post", ""],
  setup(props) {
    const { body } = props.post;
    const snippet = computed(() => body.substring(0, 100) + "...");
    onMounted(() => console.log("onMounted"));
    onUnmounted(() => console.log("onUnmounted"));
    onUpdated(() => console.log("onUpdated"));

    return { snippet };
  },
};
</script>

<style>
</style>