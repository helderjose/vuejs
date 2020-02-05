<template>
  <div id="app">
    <p>{{msg}}</p>

    <button
      type="button"
      @click="pushNumber()"
    >Push number</button>

    <p>numbers: {{ numbers }}</p>
    <p>evenNumbers: {{ evenNumbers }}</p>

    <ul>
      <li
        v-for="(evenNumber, index) in evenNumbers"
        :key="index"
      >{{ evenNumber }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    pushNumber: function() {
      this.numbers.push(this.numbers[this.numbers.length - 1] + 1)
    }
  },
  computed: {
    evenNumbers: function() {
      console.log("computed -> evenNumbers");
      return this.numbers.filter((number) => {
        if (number % 2 === 0) return number;
      })
    }
  }
}

</script>

<style>

</style>
