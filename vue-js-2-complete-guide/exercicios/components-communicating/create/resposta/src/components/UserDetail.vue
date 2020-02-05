<template>
  <div class="component">
    <h3>UserDetail.vue</h3>

    <!-- Inicie a propriedade "name" com o valor "Max" -->
		<p>User Name: {{ name }}</p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        name: "Max"
      }
    }
  }
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
