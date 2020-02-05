<template>
  <div class="component">
    <h3>UserEdit.vue</h3>

		<!-- age é desse exemplo -->
		<p>User Age: {{ userAge }}</p>

    <button @click="editAge">Edit Age, clique para ver o exemplo funcionando</button>
  </div>
</template>

<script>

	export default {
		props: ['userAge'],
		methods: {
			editAge() {
				// this.userAge = 30; // não posso alterar a variável diretamente porque é sobrescrita no User.vue
				// this.$emit('ageWasEdited', this.userAge);
				this.$emit('ageWasEdited', 30);
			}
		}
	}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
