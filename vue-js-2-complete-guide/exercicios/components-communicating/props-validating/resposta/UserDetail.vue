<template>
  <div class="component">
    <h3>UserDetail.vue</h3>
		<p>User Name: {{ switchName() }}</p>
  </div>
</template>

<script>
	/*
	Marque a prop name com o tipo string, marque-a como required, atribua o default value
	*/
	export default {
		props: {
			// pode passar vários tipos
			// myName: [String, Array],
			myName: {
					type: String,
					// default: 'Default Name'
					// required: true
			}
		},
		methods: {
			switchName() {
				return this.myName.split("").reverse().join("");
			}
		}
	}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
