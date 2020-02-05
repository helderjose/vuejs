<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: "",
          email: ""
        },
        users: [],
        resource: {},
        node: "data"
      };
    },
    methods: {
      submit() {
        this.$http.post('https://vue-js-http-cd6fb.firebaseio.com/data.json', this.user)
          .then(response => {
            console.log("salvo com sucesso")
            console.log("response: ", response)
          }, error => {
            console.log(error)
          });
      }
    }
  };
</script>

<style>
</style>
