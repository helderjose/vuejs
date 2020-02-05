<template>
  <div class="container">
    <p v-text="'Some Text'"></p>

    <!-- cuidado com cross-site scripting attacks ao usa v-html -->
    <p v-html="'<strong>Some strong text</strong>'"></p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
