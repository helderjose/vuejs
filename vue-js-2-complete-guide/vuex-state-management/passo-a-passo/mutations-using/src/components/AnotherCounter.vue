<template>
  <div style="background-color: bisque">
    <h3>AnotherCounter.vue</h3>
    <p>Os dois botões usam mutations</p>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'increment',
        'decrement'
      ])
    }
  };
</script>