<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        email: ''
      }
    },
    created () {
      // url pega no firebase
      axios.get('https://vue-update-fb6f4.firebaseio.com/users.json')
        .then(res => { console.log(res) })
        .catch(error => console.log(error))
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>