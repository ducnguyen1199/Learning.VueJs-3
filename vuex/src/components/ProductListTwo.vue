<template>
  <div class="list">
    <div class="product" v-for="(item, index) in products" :key="index">
      {{ productVips[index].name }} - {{ item.name }} - {{ item.price }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    console.log(store);
    const products = computed(() => store.state.moduleA.products);
    const productVips = computed(() => store.getters.productVips);
    return { products, productVips };
  },
};
</script>

<style scoped>
.list {
  background: rgba(0, 247, 255, 0.61);
  padding: 50px;
}
.product {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: white;
  text-align: center;
  font-size: 30px;
  margin-bottom: 5px;
}
</style>