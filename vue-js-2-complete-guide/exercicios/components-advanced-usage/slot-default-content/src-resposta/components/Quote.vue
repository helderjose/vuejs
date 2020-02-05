<template>
  <div>
    <h3>Quote.vue</h3>
    <div class="title">
      <slot name="title"></slot>

      <span style="color: #ccc">
        <!-- se não tiver o "subtitle, esse é exebido como defaul content" -->
        <slot name="subtitle">The Default Subtitle</slot>
      </span>
    </div>
    <hr />
    <div>

      <!-- O unamed slot é o default slot -->
      <slot></slot>
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