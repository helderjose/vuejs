import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

// se não colocar o mode: 'history', pega o hash por padrão
const router = new VueRouter({
  routes,  // routes: routes
  mode: 'history'
  // mode: 'hash'
});

new Vue({
  el: '#app',
  router,
  // router: router
  render: h => h(App)
})
