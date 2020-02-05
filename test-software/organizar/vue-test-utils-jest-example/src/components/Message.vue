<template>
  <div>
    <h1> {{ msg || 'default message' }}</h1>
  <button>aaa</button>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: [
    'msg'
  ]
}
</script>
