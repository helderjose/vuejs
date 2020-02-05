<template>
  <div style="background-color: bisque;">
    <h3>AnotherCounter.vue</h3>
    <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment - async</button>
    <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement - async</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement'
      ])
    }
  };
</script>