<template>
  <div class="component">
    <h3>UserEdit.vue</h3>

		<!-- a idade deve aparecer aqui -->
		<p>User Age: {{ userAge }}</p>

    <button @click="editAge">Edit Age, clique para ver o exemplo funcionando</button>
  </div>
</template>

<script>
	/*
	- Declare a prop "userAge" do tipo Number.
	- Crie o method "editAge" que muda a idade para 30.
			obs: a idade deve ser alterada em todos os componentes do exercício.
	*/

</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
