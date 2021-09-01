<template>
  <ProductListOne />
  <ProductListTwo />
</template>

<script>
import ProductListTwo from "./components/ProductListTwo.vue";
import ProductListOne from "./components/ProductListOne.vue";

export default {
  name: "App",
  components: { ProductListOne, ProductListTwo },
};
</script>
