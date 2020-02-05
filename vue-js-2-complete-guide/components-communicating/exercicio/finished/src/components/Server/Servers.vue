<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
			<!-- app-server foi registrado como appServer -->
      <app-server
				v-for="server in servers"
				:server="server"
			></app-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";

export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" }
      ]
    };
	},
	// registra o Server.vue
  components: {
		// appServer pode ser usado como "app-server" ou "appServer" na tag "<template>"
    appServer: Server
  }
};
</script>

<style>
</style>
