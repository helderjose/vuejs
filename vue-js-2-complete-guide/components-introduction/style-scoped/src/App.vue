<template>
  <div id="container" class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Servers from "./Servers.vue";
import ServerDetails from "./ServerDetails.vue";

export default {
	// registra o componente e cria um seletor
  components: {
    "app-header": Header,
    "app-servers": Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style scoped>
/* sem o scoped o css aqui é global */

#container {
	background-color: orange;
}
</style>
