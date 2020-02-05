<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a Server</p>
    <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
    <hr />
    <button @click="resetStatus">Change to Normal</button>
  </div>
</template>

<script>
import { serverBus } from "../../main";

export default {
  data: function() {
    return {
      server: null
    };
  },
  methods: {
    resetStatus() {
			/*
			obs: cada server é um objeto, e objeto é passado por referẽncia em javascript,
			por isso quando mudar aqui vai mudar o server do Servers.vue porque está
			no mesmo endereço de memória.
			*/
			if(this.server)
				this.server.status = "Normal";
			else
				alert('Selecione um server.')
    }
  },
  created() {
    serverBus.$on("serverSelected", server => {
      this.server = server;
    });
  }
};
</script>

<style>
</style>
