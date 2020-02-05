<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="serverSelected"
  >Server #{{ server.id }}</li>
</template>

<script>
import { serverBus } from "../../main";

export default {
	// a proppriedade "server" é passada no v-for do Server.vue
  props: ["server"],
  methods: {
    serverSelected() {
      serverBus.$emit("serverSelected", this.server);
    }
  }
};
</script>

<style>
</style>
