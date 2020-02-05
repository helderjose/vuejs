<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
		<p>User Name: {{ switchName() }}</p>
		<button @click="resetName">Reset Name e passa myName para User.vue</button>
		<button @click="resetFn()">Reset Name com a função vinda do UserDetail.vue</button>
  </div>
</template>

<script>
	export default {
		props: {
			myName: {
					type: String,
			},
			// vem do User.vue por props
			resetFn: Function,
		},
		methods: {
			switchName() {
				return this.myName.split("").reverse().join("");
			},
			resetName() {
				console.log("UserDetail.vue -> resetName()")
				/*
				Se passar um objeto do pai para o filho, e alterar no filho, vai ser
				alterado no pai porque javascritp passa objeto por refência.
				*/
				this.myName = "Max";

				// vai ser usado no User.vue
				this.$emit("nameWasReset", this.myName);
			}
		}
	}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
