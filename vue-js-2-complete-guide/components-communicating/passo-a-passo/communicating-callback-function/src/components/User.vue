<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>User.vue name = {{ name }}</p>
		<button @click="changeName">Change my Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">

        <!--
          :resetFn="resetName"
          vai passar para o UserDetail.vue
        -->
        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
        >
        </app-user-detail>
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
    },
    resetName() {
      console.log("User.vue -> resetName()")
      this.name = "Max";
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
