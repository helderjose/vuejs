<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase!</button>
		<p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
	},
	destroyed() {
    console.log("New.vue -> Destroyed!");
	},
	deactivated() {
    console.log("New.vue -> Deactivated!");
  },
  activated() {
    console.log("New.vue -> Activated!");
  }
};
</script>

<style>
</style>