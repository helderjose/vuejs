<template>
  <div style="border: solid 1px #000">
    <h3>User.vue</h3>
    <h1>The User Page</h1>
    <hr />

    <!-- implemente o method "navigateToHome" -->
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>

    <hr />
    <router-view></router-view>
  </div>
</template>

<script>

</script>