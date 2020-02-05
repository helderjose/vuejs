<template>
  <div class="component">
		<h3>UserDetail.vue</h3>
		<p>User Name: {{ switchName() }}</p>

		<p>User Age: {{ userAge }}</p>

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
			resetFn: Function,
			userAge: Number
		},
		methods: {
			switchName() {
				return this.myName.split("").reverse().join("");
			},
			resetName() {
				console.log("UserDetail.vue -> resetName()")

				this.$emit("nameWasReset", "Max");

				// this.myName = "Max";
				// this.$emit("nameWasReset", this.myName);
			}
		}
	}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
