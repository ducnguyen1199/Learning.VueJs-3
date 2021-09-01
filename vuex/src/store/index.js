import { createStore } from "vuex";

const moduleA = {
  //same data vue
  state: {
    products: [
      { name: "Banana", price: 20 },
      { name: "apple", price: 50 },
      { name: "tomato", price: 10 },
    ],
  },
  //same computed
  getters: {
    productVips: (state) =>
      state.products.map((item) => ({
        ...item,
        name: `**${item.name}**`,
      })),
  },
  // handle sync
  mutations: {
    reducePrice: (state, { value }) => {
      state.products.forEach((item) => {
        item.price -= value;
      });
    },
  },
  //handle asynchronous
  actions: {
    reducePrice: (context, { value }) => {
      setTimeout(() => {
        context.commit("reducePrice", { value });
      }, 2000);
    },
  },
};
export default createStore({
  strict: true, //can't change data from outsite
  modules: { moduleA },
});
