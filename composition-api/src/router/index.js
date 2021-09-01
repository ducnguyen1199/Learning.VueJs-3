import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PostList from "../views/PostList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post-list",
    name: "postList",
    component: PostList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
