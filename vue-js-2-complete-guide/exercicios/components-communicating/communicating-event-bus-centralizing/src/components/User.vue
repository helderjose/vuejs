<template>
  <div class="component">
    <h3>User.vue</h3>
    <p>name = {{ name }}</p>
    <p>Age is {{ age }}</p>
		<button @click="changeName">Change my Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">

        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="age"
        >
        </app-user-detail>
      </div>
      
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :userAge="age"
        >
        </app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  /*
    faça o watch da função para atualizar a variável "age"
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
