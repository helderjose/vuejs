<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <input v-model="filterText" />
        <ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				text: "Hello there!",
				fruits: ["Apple", "Banana", "Mango", "Melon"],
				filterText: ''
			};
		},
		// computed properties é mais performático do que filter
		/*
		use computed properties para filtrar
		as frutas de acordo com o que é digitado no input
		name: filteredFruits
		*/
	};
</script>

<style>
</style>
