<template>
  <div style="border: solid 1px #000;">
		<h3>User.vue</h3>
    <h1>The User Page</h1>
    <hr />
		<p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr />

		<!-- acho que nao preciso disso -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id
		}
	},

	// para atualizar o parãmetro
	watch: {
		'$route'(to, from) {
			this.id = to.params.id;
		}
	},
  methods: {
    navigateToHome() {
			this.$router.push('/')
    }
  }
};
</script>