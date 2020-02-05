<template>
  <div>
    <h3>List.vue</h3>
    <h1>Mixins - List.vue</h1>

    <!-- "filterText" está no fuitMixin.js -->
    <input v-model="filterText" />
    <ul>

      <!-- "filteredFruits" está no fuitMixin.js -->
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
  };
</script>

<style>
</style>
