<template>
  <div class="list">
    <div class="product-list">
      <div class="product" v-for="(item, index) in products" :key="index">
        {{ item.name }} - {{ item.price }}
      </div>
    </div>
    <button @click="reducePrice">reduce price</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.state.moduleA.products);
    const reducePrice = () => store.dispatch("reducePrice", { value: 2 });
    return { products, reducePrice };
  },
};
</script>

<style scoped>
.list {
  background: rgba(255, 255, 0, 0.61);
  padding: 50px;
}
.product-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.product {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: white;
  text-align: center;
  font-size: 30px;
}
</style>