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
      submit() {
        // this.$http.post('data.json', this.user)
        //   .then(response => {
        //     console.log(response)
        //   }, error => {
        //     console.log("error: ", error)
        //   });

        // this.resource.save({}, this.user);  // não consegui fazer funcionar
        this.resource.saveAlt(this.user);

      },
      fetchData() {
        this.$http.get('data.json')
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
      },
    },
    created() {
        const customActions = {
          saveAlt: { method: "POST", url: "alternative.json" },
          getData: { method: "GET" }
        };

        this.resource = this.$resource('data.json', {}, customActions);
      }
  };
</script>

<style>
</style>
