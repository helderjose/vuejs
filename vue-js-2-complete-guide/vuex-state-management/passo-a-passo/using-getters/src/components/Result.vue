<template>
  <p>Result.vue -> this.$store.state.counter -> Counter is: {{ counter }}</p>
</template>

<script>
export default {
  computed: {
		counter() {
			// return this.$store.getters.doubleCounter;
			return this.$store.state.counter;
		}
	}
};
</script>