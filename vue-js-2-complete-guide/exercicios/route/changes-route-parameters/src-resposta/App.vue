<template>
  <div class="container" style="border: solid 2px #000;">
    <h3>App.vue</h3>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
				<hr />
        <app-header></app-header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";

  export default {
    components: {
      appHeader: Header
    }
  };
</script>

<style>
</style>
