<template>
  <div>
    <p> {{ msg }} </p>
  </div>
</template>

<script>
export default {
  name: 'MessageComponent',
  props: ['msg'],

  // sem o data nao estava aparecendo no coverage.
  data () {
    return {

    }
  }
}
</script>