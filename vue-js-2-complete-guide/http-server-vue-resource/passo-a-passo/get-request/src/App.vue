<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http get</h1>

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
        this.$http.get('https://vue-js-http-cd6fb.firebaseio.com/data.json')
          .then(response => {
            // passo 1
            // console.log("response: ", response)
            // console.log("response.json(): ", response.json())
            // aqui o response é uma string, a linha abaixo converte para json.
            // .json() retorna uma promise, por isso tem o segundo .then
            return response.json();
          })
          .then(data => {
            // passo 2
            // console.log("data: ", data)
            let resultArray = [];

            for (let key in data) {
              resultArray.push(data[key]);
            }

            this.users = resultArray;
          });
      }
    }
  };
</script>

<style>
</style>
