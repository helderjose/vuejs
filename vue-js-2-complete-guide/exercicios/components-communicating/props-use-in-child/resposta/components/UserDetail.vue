<template>
  <div class="component">
    <h3>UserDetail.vue</h3>

		<!-- chama a função quando muda myName -->
		<p>User Name: {{ switchName() }}</p>
  </div>
</template>

<script>
	export default {
		// User.vue está atribuindo valor no myName e passando para cá.
		props: ['myName'],
		methods: {
			switchName() {
				console.log('UserDetail.vue -> switchName()')
				return this.myName.split("").reverse().join("");
			}
		}
	}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
