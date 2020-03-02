<template>
  <div class="component">
    <h3>UserEdit.vue</h3>
		<Common
			@on-itemClicked="myFunc2('editParam1', 'editParam2', age)">
		</Common>
  </div>
</template>

<script>
	import Common from "./Common.vue"

	export default {
		components: {
			Common
		},
		data: function () {
			return {
				age: 33
			}
		},
		methods: {
			myFunc2
		}
  }

  function myFunc2(param1, param2, paramAge) {
		console.log("UserDetail.vue -> myFunc2()"),
		console.log(param1)
		console.log(param2)
		console.log(paramAge, '\n\n\n')
  }
</script>

<style scoped>
	div {
		background-color: lightgreen;
	}
</style>
