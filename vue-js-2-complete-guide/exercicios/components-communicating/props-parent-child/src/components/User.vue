<template>
  <div class="component">
    <h1>User.vue</h1>
    <!-- chame changeName -->
		<button>Change my Name</button>

    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">

        <!-- passe a propriedade "name" -->
        <app-user-detail></app-user-detail>

      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";

// inicie a proprieade "name" com o valor "Max"
// crie o method "changeName" que mude o name para "Anna"

export default {
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
