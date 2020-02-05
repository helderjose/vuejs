<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {

      // home é o nome que foi dado no routes.js
			this.$router.push({ name: 'home' })
			// this.$router.push('/')
    }
  }
};
</script>