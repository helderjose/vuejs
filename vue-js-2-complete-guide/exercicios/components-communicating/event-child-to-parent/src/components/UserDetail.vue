<template>
  <div class="component">
    <h3>UserDetail.vue</h3>
		<p>User Name: {{ switchName() }}</p>

	<!--
		ao clicar no botão execute o method resetName e atribua o valor Max à prop myName.
		Obs: A prop name do User.vue também deve ser resetada com o mesmo valor
	-->
		<button>Reset Name</button>

  </div>
</template>

<script>
	export default {
		props: {
			myName: {
					type: String,
			}
		},
		methods: {
			switchName() {
				return this.myName.split("").reverse().join("");
			},
		}
	}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
