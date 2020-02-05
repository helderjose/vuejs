<template>
  <div class="component">
		<h3>UserEdit.vue</h3>

		<p>User Age: {{ userAge }}</p>

		<!--
			ao clicar deve atualizar o valor da variável "UserAge",
			usando o event bus
		 -->
    <button >Edit Age, clique para ver o exemplo funcionando</button>
  </div>
</template>

<script>


	import { eventBus } from "../main";

	export default {
		props: ['userAge'],
	}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
