<template>
  <div class="component">
		<h3>UserEdit.vue</h3>

		<p>User Age: {{ userAge }}</p>

    <button @click="editAge">Edit Age, clique para ver o exemplo funcionando</button>
  </div>
</template>

<script>
// importa o eventBus
	import { eventBus } from "../main";

	export default {
		props: ['userAge'],
		methods: {
			editAge() {
				console.log('UserEdit.vue -> editAge() ->  eventBus.$emit')
				// this.userAge = 30; // não posso mudar a variável diretamente porque ela vem de User.vue
				// this.$emit('ageWasEdited', this.userAge);

				// cria o 'ageWasEdited' no eventBus
				eventBus.$emit('ageWasEdited', 30);
			}
		}
	}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
