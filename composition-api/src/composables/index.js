import { ref } from "vue";

export const getPosts = (isLoading) => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    isLoading.value = true;
    try {
      let data = await fetch(
        "https://6098e31e99011f001713f9b5.mockapi.io/post"
      );
      if (!data.ok) {
        throw Error("no data available");
      } else {
        posts.value = await data.json();
      }
    } catch (err) {
      error.value = err;
    }
  };
  return { posts, error, load };
};

export const deletePost = (id) => {
  const errorDel = ref(null);
  const del = async () => {
    try {
      let data = await fetch(
        `https://6098e31e99011f001713f9b5.mockapi.io/post/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!data.ok) {
        throw Error("failed");
      } else {
        return data;
      }
    } catch (err) {
      errorDel.value = err;
    }
  };
  return { errorDel, del };
};
