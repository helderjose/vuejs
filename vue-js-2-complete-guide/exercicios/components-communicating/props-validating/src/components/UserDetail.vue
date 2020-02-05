<template>
  <div class="component">
    <h3>UserDetail.vue</h3>
		<p>User Name: {{ switchName() }}</p>
  </div>
</template>

<script>
	/*
	Marque a prop com o tipo string, required e default value.
	Obs: Deve parar de dar erro no console ao final do exercício
	*/
	export default {
		methods: {
			switchName() {
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
