import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';



new Vue({
  el: '#app',
  router,
  // router: router
  render: h => h(App)
})
