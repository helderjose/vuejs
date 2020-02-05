<template>
  <div class="component">
		<h3>UserEdit.vue</h3>

		<p>User Age: {{ userAge }}</p>

    <button @click="editAge">Edit Age, clique para ver o exemplo funcionando</button>
  </div>
</template>

<script>
	import { eventBus } from "../main";

	export default {
		props: ['userAge'],
		methods: {
			editAge() {

				this.userAge === 27 ? eventBus.changeAge(30) : eventBus.changeAge(27);

				//  para baixo é a versão anterior.

				// this.userAge = 30;
				// // this.$emit('ageWasEdited', this.userAge);
				// // eventBus.$emit('ageWasEdited', this.userAge);
				// eventBus.changeAge(this.userAge);	// chama o método do main.js -> eventBus
			}
		}
	}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
