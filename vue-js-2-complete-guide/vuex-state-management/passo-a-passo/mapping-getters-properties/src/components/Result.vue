<template>
  <p>Counter is: {{ counter }} - Result.vue - this.$store.getters.doubleCounter</p>
</template>

<script>
export default {
  computed: {
		counter() {
			return this.$store.getters.doubleCounter;
		}
	}
};
</script>