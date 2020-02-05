<template>
  <div>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";

export default {
  // registra o componente local vindo do ServerStatus.vue
  components: {
    "app-server-status": ServerStatus
  }
};
</script>