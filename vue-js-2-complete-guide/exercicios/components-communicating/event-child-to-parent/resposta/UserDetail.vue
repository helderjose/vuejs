<template>
  <div class="component">
    <h3>UserDetail.vue</h3>
		<p>User Name: {{ switchName() }}</p>
		<button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
	export default {
		props: {
			myName: {
					type: String,
			}
		},
		methods: {
			switchName() {
				return this.myName.split("").reverse().join("");
			},
			resetName() {
				/*
				Se passar um objeto do pai para o filho, e alterar no filho, vai ser
				alterado no pai porque javascritpt passa objeto por refência.
				*/
				// this.myName = "Max"; // assim dá erro, não posso mudar o valor da variável diretamente

				// vai ser usado no User.vue
				this.$emit("nameWasReset", "Max");
			}
		}
	}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
