<template>
  <div class="component">
    <h1>User.vue</h1>
    <p>this.name: {{ name }}</p>
		<button @click="changeName">Change my Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">

        <!-- passe a prop name para UserDetail.vue -->
        <app-user-detail></app-user-detail>
        
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";

export default {
	data: function() {
		return {
			name: 'Max'
		};
	},
	methods: {
		changeName() {
			this.name = 'Anna'
		}
	},
  components: {
    appUserDetail: UserDetail,
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
