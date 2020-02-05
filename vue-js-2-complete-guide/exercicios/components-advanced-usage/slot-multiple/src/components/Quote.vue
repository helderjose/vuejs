<template>
  <div>
    <h3>Quote.vue</h3>
    <div class="title">

      <!-- usando named slot, faça o h2 do App.vue aparecer aqui. -->
    </div>
    <hr />
    <div>
      
      <!-- usando name slot, faça a tag p do App.vue aparecer aqui -->
    </div>
  </div>
</template>

<script>

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