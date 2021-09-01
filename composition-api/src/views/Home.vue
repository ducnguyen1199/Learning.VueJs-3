<template>
  <div class="home">
    <p>
      ChadOne with ref: name is {{ chadOne.name }} and age is {{ chadOne.age }}
      <button @click="upAgeChadOne">+</button>
    </p>
    <p>
      ChadTwo with reative: name is {{ chadTwo.name }} and age is
      {{ chadTwo.age }}
      <button @click="upAgeChadTwo">+</button>
    </p>
    <p>
      AgeOne with ref: Age is {{ ageOne }}
      <button @click="upAgeOne">+</button>
    </p>
    <p>
      AgeTwo with ref: Age is {{ ageTwo }}
      <button @click="upAgeTwo">+</button>
    </p>
    <input type="text" v-model="search" placeholder="search name" />
    <div v-for="(item, index) in matchingNames" :key="index">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "Home",
  setup() {
    //variable inside aren't reactive
    //but using ref or reactive variable that can help updated
    //in case value inside is an object then reactive more than ref,
    //but in case value inside isn't an onject then reactive can't change value,
    //because this value is read-only so we should use ref in all cases.
    console.log(this); //→undefined;

    const chadOne = ref({ name: "chad", age: 20 });
    const chadTwo = reactive({ name: "suu", age: 21 });

    const ageOne = ref(25);
    const ageTwo = reactive(26);

    const upAgeChadOne = () => chadOne.value.age++;
    const upAgeChadTwo = () => chadTwo.age++;

    const upAgeOne = () => ageOne.value++;
    const upAgeTwo = () =>
      alert("reactive variable can't change with reactive");

    const search = ref("");
    const names = ref(["chad", "suu", "serena", "john"]);

    const matchingNames = computed(() =>
      names.value.filter((item) => item.includes(search.value))
    );

    //watch function will run when search is changed
    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    //watchEffect function will run when value variable inside the callbackfuntion is changed
    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    const clickToStopWatch = () => {
      stopWatch();
      stopWatchEffect();
    };

    //when return then variable will automaticlly change from var.value to value
    return {
      chadOne,
      chadTwo,
      upAgeChadOne,
      upAgeChadTwo,
      ageOne,
      ageTwo,
      upAgeOne,
      upAgeTwo,
      search,
      names,
      matchingNames,
      stopWatch,
      stopWatchEffect,
      clickToStopWatch,
    };
  },
};
</script>
