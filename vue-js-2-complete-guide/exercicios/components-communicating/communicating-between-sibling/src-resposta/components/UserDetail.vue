<template>
  <div class="component">
    <h3>UserDetail.vue</h3>
		<p>User Name: {{ switchName() }}</p>

		<!-- age é desse exemplo -->
		<p>User Age: {{ userAge }}</p>
		
		<button @click="resetName">Reset Name e passa myName para User.vue</button>
		<button @click="resetFn()">Reset Name com a função vinda do User.vue</button>
  </div>
</template>

<script>
	export default {
		props: {
			myName: {
					type: String,
			},
			resetFn: Function,

			// tbm tem no UserEdit.vue
			userAge: Number
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
