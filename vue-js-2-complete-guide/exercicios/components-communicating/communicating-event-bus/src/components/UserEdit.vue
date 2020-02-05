<template>
  <div class="component">
		<h3>UserEdit.vue</h3>

		<p>User Age: {{ userAge }}</p>

		<!-- mudar a idade quando clicar no botão -->
    <button>Edit Age, clique para ver o exemplo funcionando</button>
  </div>
</template>

<script>
	/*
	Crie o method "editAge" que faz o emit do "ageWasEdited"
	*/

	export default {
		props: ['userAge']
	}
</script>

<style scoped>
	div {
		background-color: lightgreen;
	}
</style>
