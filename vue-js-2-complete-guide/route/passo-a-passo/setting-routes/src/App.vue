<template>
  <div class="container" style="border: solid 2px #000;">
    <h3>App.vue</h3>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <pre>
          Acesse:
          <!-- obs: se tirar o "#" a página "pisca" na hora de carregar -->
          <a href="http://localhost:8080/#/">Home</a>
          <a href="http://localhost:8080/#/user">User</a>
        </pre>
				<hr />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
