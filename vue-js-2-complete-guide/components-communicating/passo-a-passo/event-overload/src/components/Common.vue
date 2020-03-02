<template>
  <div class="component">
    <h1>Common.vue</h1>
    <!-- <h1>The User Component</h1>
    <p>I'm an awesome User!</p> -->
		<!-- <button @click="changeName">Change my Name</button> -->
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <button
        type="button"
        @click="itemClicked">
        Click-me
      </button>

        <!--
          Passa a propriedade name para o componente.
          :name é a propriedade que foi declarada no UserDetail.vue
          name é o valor, que aqui é 'Max'
        -->
        <!-- <app-user-detail :name="name"></app-user-detail> -->
      </div>
      <!-- <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div> -->
    </div>
  </div>
</template>

<script>
// import UserDetail from "./UserDetail.vue";
// import UserEdit from "./UserEdit.vue";

export default {
	data: function() {
		return {
			name: 'Max'
		};
	},
	methods: {
		itemClicked: itemClicked
	},
  components: {
    // appUserDetail: UserDetail,
    // appUserEdit: UserEdit
  }
};

function itemClicked () {
  console.log("Common.vue -> itemClicked()")
  this.$emit("on-itemClicked");
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
