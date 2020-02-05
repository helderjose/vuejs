<template>
  <div style="border: solid 1px #000">
    <h3>User.vue</h3>
    <h1>The User Page</h1>
    <hr />
    <!-- <button @click="$router.push('/')" class="btn btn-primary">Go to Home</button> -->
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
			this.$router.push('/')
    }
  }
};
</script>