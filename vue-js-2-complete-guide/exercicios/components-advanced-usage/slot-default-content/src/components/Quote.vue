<template>
  <div>
    <h3>Quote.vue</h3>
    <div class="title">
      
      <!-- o h2 do App.vue deve aparecer aqui -->

      <span style="color: #ccc">
        
        <!--
          declare um named slot com o nam "subtitle" e o valor padrão
          "The Default Subtitle" (esse é o valor que deve aparecer na tela)
        -->

      </span>
    </div>
    <hr />
    <div>

      <!-- O "p" do App.vue deve aparecer aqui -->
    </div>
  </div>
</template>

<script>
  export default {
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