<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
  /*
    O Vue reconhece o appHeader como app-header no template
    e Servers como servers

    Obs do Servers: no objeto é criado um valor igual a chave, ex:
    {
			Servers
    }
		é igual
		{
			Servers: Servers
    }
		Isso é do ECMAScript 6
    */
  components: {
    appHeader: Header,
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
