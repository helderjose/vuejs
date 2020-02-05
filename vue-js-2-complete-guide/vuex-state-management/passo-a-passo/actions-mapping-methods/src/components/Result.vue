<template>
  <div style="background-color: chocolate">
		<h3>Result.vue</h3>
		<p>Counter is: {{ counter }} - doubleCounter</p>
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