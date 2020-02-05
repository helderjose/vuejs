export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  created() {
    // vai passar aqui duas vezes porque está sendo usado no App.vue e no List.vue
    console.log("Created - fruitMixin.js");
  }
};
