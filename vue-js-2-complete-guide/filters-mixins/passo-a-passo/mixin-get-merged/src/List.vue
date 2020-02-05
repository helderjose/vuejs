<template>
  <div>
    <h1>Filters & Mixins - List.vue</h1>
    <input v-model="filterText" />
    <ul>
      <li
        v-for="(fruit, index) in filteredFruits"
        v-bind:key="index"
      >{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
  import { fruitMixin } from "./fruitMixin";

  export default {
    mixins: [fruitMixin],
    created() {
      // vai passar uma vez aqui porque está sendo usado apenas uma vez no App.vue
      console.log("Inside List Created Hook - List.vue");
    }
  };
</script>

<style>
</style>
