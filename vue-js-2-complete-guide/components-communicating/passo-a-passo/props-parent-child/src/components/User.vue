<template>
  <div class="component">
    <h3>User.vue</h3>
    <p>
      componente pai<br/>
      The User Component<br/>
      I'm an awesome User!
    </p>

		<button @click="changeName">Change my Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">

        <!--
          Passa a propriedade name para o componente.
          :name é a propriedade que foi declarada no UserDetail.vue
          name é o valor, que aqui é 'Max'
        -->
        <app-user-detail :name="name"></app-user-detail>
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
