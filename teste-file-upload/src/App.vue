<template>
  <div id="app">
    <p>{{msg}}</p>



     <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
        <button v-on:click="submitFile()">Submit</button>
    </div>
    <img :src="`data:image/jpeg;base64,${hexToBase64(imagem)}`" />
    <!-- <img src="http://192.168.57.19:8080/remote.php/webdav/Photos/Coast.jpg" /> -->
  </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        file: '',
        imagem: ''
      }
    },
    mounted: function () {
    },
    methods: {
      submitFile: function() {
        let formData = new FormData();
        formData.append('file', this.file);

        /*
        https://github.com/nextcloud/server/issues/3131
        https://stackoverflow.com/questions/8719276/cross-origin-request-headerscors-with-php-headers/9866124#9866124
        https://docs.nextcloud.com/server/13/developer_manual/client_apis/WebDAV/index.html
        */


        axios({
          url: `http://192.168.57.19:8080/remote.php/webdav/Photos/Coast.jpg`,
          // url: `http://192.168.57.19:8080/remote.php/webdav/files/Photos/test3.png`,
          method: "GET",
            // withCredentials: true,
          headers: {
            // 'Content-Type': 'multipart/form-data',
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
          },
          // params: {
          //   "gw-app-key": APPLICATION_KEY
          // },
          // data: {
          //   // "ip":"10.12.36.234",
          // }
        }).then(res => {
          // console.log(res)
          console.log(res.data)
          this.imagem = res.data
        }).catch(err => {
          console.log(err)
        })

        // axios.get( 'http://192.168.57.19:8080/remote.php/webdav/Photos/test3.png',

        //   {
        //     headers: {
        //         // 'Content-Type': 'multipart/form-data',
        //         'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
        //         // 'Authorization': 'Basic eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2YWU1ZDQ4ZmEwNDEwOTc4MGYwNTc1OWRkYTdiMTBiN2NlNWRiNDBiODg5MTgzZmM4NTAwZTgzNzA5YTJkM2FiIiwiVFlQRSI6IkJlYXJlciIsInVzZXJuYW1lIjoicmFwaGFlbC5vbGl2ZWlyYSIsImV4cCI6MTU3NzU1NzAwOH0.5l-yzqy_94HXWR1cfWwKnC26a2Oc7roG4zWcFkOzjdtRdHuiJmioY8zzF5FnCL6kYk3QnK7SkmT7eGgiYpRg_w='
        //     }
        //   }
        // ).then(function(){
        //   console.log('SUCCESS!!');
        // })
        // .catch(function(err){
        //   console.log('FAILURE!!: ', err);
        // });

        // axios.get( 'http://192.168.57.19:8080/remote.php/webdav/Photos/test3.png',
        //   formData,
        //   {
        //     headers: {
        //         // 'Content-Type': 'multipart/form-data',
        //         'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
        //         // 'Authorization': 'Basic eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2YWU1ZDQ4ZmEwNDEwOTc4MGYwNTc1OWRkYTdiMTBiN2NlNWRiNDBiODg5MTgzZmM4NTAwZTgzNzA5YTJkM2FiIiwiVFlQRSI6IkJlYXJlciIsInVzZXJuYW1lIjoicmFwaGFlbC5vbGl2ZWlyYSIsImV4cCI6MTU3NzU1NzAwOH0.5l-yzqy_94HXWR1cfWwKnC26a2Oc7roG4zWcFkOzjdtRdHuiJmioY8zzF5FnCL6kYk3QnK7SkmT7eGgiYpRg_w='
        //     }
        //   }
        // ).then(function(){
        //   console.log('SUCCESS!!');
        // })
        // .catch(function(err){
        //   console.log('FAILURE!!: ', err);
        // });

        // axios({
        //   url: `http://192.168.57.19:8080/remote.php/webdav/Photos/test4.png`,

        //   method: "PUT",
        //   withCredentials: true,
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //     'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
        //   },
        //   // params: {
        //   //   // "gw-app-key": APPLICATION_KEY
        //   // },
        // }).then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // })
      },
      hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
      },

      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];












        // axios({
        //   url: `http://192.168.57.19:8080/remote.php/webdav/Photos/test.png`,

        //   method: "PUT",
        //   // withCredentials: true,
        //   headers: {
        //     // "x-wcp-token": token
        //     'Content-Type': 'multipart/form-data',
        //     'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
        //   },
        //   params: {
        //     // "gw-app-key": APPLICATION_KEY
        //   },
        // }).then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // })
      }
    }
  }
</script>

<style>

</style>
