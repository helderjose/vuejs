<template>
  <div class="component">
    <h3>UserDetail.vue</h3>

    <!-- exibe a propriedade name do props: ['name'] -->
		<p>User Name: {{ name }}</p>
    
  </div>
</template>

<script>
	export default {
    // declara a propriedade name
		props: ['name']
	}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
