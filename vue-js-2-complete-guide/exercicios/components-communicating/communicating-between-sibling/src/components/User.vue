<template>
  <div class="component">
    <h1>User.vue</h1>
    <p>name = {{ name }}</p>
    <p>Age is {{ age }}</p>
		<button @click="changeName">Change my Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">

        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
        >
        </app-user-detail>
      </div>
      
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :userAge="age"
          @ageWasEdited="age = $event"
        >
        </app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
/*
- passe o atributo "age" como prop para UserDetail.vue e para UserEdit.vue
- Crie o method "resetName" que atribua o "name" com "Max".
- Passe "resetName" como prop para o UserDetail.vue
*/
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
	data: function() {
		return {
      name: 'Max',
      age: 27
		};
	},
	methods: {
		changeName() {
			this.name = 'Anna'
    },
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
