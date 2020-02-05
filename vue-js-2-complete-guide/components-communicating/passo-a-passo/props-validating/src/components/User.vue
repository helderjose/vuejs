<template>
  <div class="component">
    <h1>User.vue</h1>
    <p>User.vue name = {{ name }}</p>
		<button @click="changeName">Change my Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="name"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

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
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
