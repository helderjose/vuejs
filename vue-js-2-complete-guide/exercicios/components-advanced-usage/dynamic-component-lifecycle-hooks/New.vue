<template>
  <h3>New Quote</h3>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  // só chama destroyed se não tiver o keep-alive
	destroyed() {
    console.log("New.vue -> Destroyed!");
  },
  // precisa do keep-alive
	deactivated() {
    console.log("New.vue -> Deactivated!");
  },
  // precisa do keep-alive
  activated() {
    console.log("New.vue -> Activated!");
  }
};
</script>

<style>
</style>