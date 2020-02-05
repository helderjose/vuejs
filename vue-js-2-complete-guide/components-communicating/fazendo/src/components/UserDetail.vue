<template>
  <div class="component">
		<h2>UserDetail.vue</h2>
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
		<p>User Name: {{ switchName() }}</p>

		<p>User Age: {{ userAge }}</p>

		<button @click="resetName">Reset Name e passa myName para User.vue</button>
		<button @click="resetFn()">Reset Name com a função vinda do UserDetail.vue</button>
  </div>
</template>

<script>
	import { eventBus } from "../main";

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
				this.myName = "Max";
				this.$emit("nameWasReset", this.myName);
			}
		},
		created() {
			eventBus.$on("ageWasEdited", (age) => {
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
