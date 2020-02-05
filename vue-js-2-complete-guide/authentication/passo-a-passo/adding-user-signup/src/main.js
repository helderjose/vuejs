import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

// url pega no firebase
axios.defaults.baseURL = 'https://vue-update-fb6f4.firebaseio.com'
axios.defaults.headers.get['Accepts'] = 'application/json'




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
