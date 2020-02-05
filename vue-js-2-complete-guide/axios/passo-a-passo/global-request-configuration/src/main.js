import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'


/*
headers.common -> toda requisição, get, post e etc.
"fasfdsa" seria um token

No devtools dá para ver os headers


*/
axios.defaults.baseURL = 'https://vue-update-fb6f4.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
