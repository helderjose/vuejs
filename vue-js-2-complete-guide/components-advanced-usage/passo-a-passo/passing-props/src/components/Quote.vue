<template>
  <div>
    <!-- exibe a prop "quote" -->
    <p>{{ quote }}</p>
  </div>
</template>

<script>
  export default {
    // declara a prop "quote"
    props: ['quote']
  }
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  h2 {
    color: red;
  }

  .title {
    font-style: italic;
  }
</style>