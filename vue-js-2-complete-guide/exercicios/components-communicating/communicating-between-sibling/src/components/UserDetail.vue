<template>
  <div class="component">
    <h3>UserDetail.vue</h3>
		<p>User Name: {{ switchName() }}</p>

		<!-- a idade deve aparecer na tela -->
		<p>User Age: {{ userAge }}</p>
		
		<button @click="resetName">Reset Name e passa myName para User.vue</button>

		<!-- use resetFn nesse botão -->
		<button >Reset Name com a função vinda do User.vue</button>
  </div>
</template>

<script>

	/*
	- Declare  a prop "userAge" do tipo Number;
	- Declare a prop "resetFn" do tipo Function
	*/
	export default {
		props: {
			myName: {
					type: String,
			},

		},
		methods: {
			switchName() {
				return this.myName.split("").reverse().join("");
			},
			resetName() {
				console.log("UserDetail.vue -> resetName()")
				// this.myName = "Max"; // não posso mudar a variável diretamente porque vai ser sobrescrita quando o componente pai for renderizado
				// this.$emit("nameWasReset", this.myName);
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
