<template>
  <div class="component">
    <p>
      UserDetail.vue<br/>
      componente filho<br/>
      You may view the User Details here
    </p>

    <p>Many Details</p>

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
