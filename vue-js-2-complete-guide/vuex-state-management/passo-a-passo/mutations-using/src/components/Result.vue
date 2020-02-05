<template>
  <div style="background-color: aquamarine">
		<h3>Result.vue</h3>
		<p>Counter is: {{ counter }}</p>
	</div>
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