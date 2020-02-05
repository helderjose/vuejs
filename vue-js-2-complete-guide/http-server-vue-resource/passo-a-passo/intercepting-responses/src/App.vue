<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>

        <br />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(u, index) in users"
            :key="index"
          >{{ u.username }} - {{ u.email }}</li>
        </ul>
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
      fetchData() {
        // get('') no parâmetro porque a url está confiurada no main.js -> Vue.http.options.root
        this.$http.get('')
          .then(response => {
            return response.json();
          })
          .then(data => {
            // console.log("data: ", data)
            let resultArray = [];

            // data.messages -> porque foi alterado no response interceptor.
            for (let key in data.messages) {
              resultArray.push(data.messages[key]);
            }

            this.users = resultArray;
          });
      }
    }
  };
</script>

<style>
</style>
