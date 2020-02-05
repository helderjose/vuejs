<template>
  <div class="row">
    <!-- exibe as quotes que vem do App.vue -->
    <app-quote
			v-for="(quote, index) in quotes"
			v-bind:key=index
    >{{ quote }}</app-quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
};
</script>

<style>
</style>