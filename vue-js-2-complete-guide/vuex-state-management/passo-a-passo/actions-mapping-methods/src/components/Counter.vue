<template>
  <div style="background-color: aqua;">
    <h3>Counter.vue</h3>
    <!--
      passando parâmetro para a action, esse parâmetro
      é o payload nas mutations e nas actions do store.js
    -->
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'increment',
        'decrement'
      ])
    }
  };
</script>