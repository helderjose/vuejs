<template>
  <p>AnotherResult.vue -> this.$store.getters.doubleCounter -> Counter is: {{ counter }}</p>
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