<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MessageComponent msg="my message" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MessageComponent from '@/components/MessageComponent.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MessageComponent
  },
};
</script>
