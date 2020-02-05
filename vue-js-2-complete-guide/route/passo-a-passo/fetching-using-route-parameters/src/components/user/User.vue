<template>
  <div>
    <h1>The User Page</h1>
    <hr />

    <!-- exibe o parâmetro -->
		<p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr />

    <!-- acho que não preciso do router-view aqui -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
	data() {
		return {
      // pega o parâmetro id da url
			id: this.$route.params.id
		}
	},
  methods: {
    navigateToHome() {
			this.$router.push('/')
    }
  }
};
</script>