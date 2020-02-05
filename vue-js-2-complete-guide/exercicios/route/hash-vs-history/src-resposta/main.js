import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

/*
Se não colocar o mode: 'history', pega o hash por padrão.
O history recarrega a página completa, o hash atualiza apenas a parte do componente.
*/
const router = new VueRouter({
  routes,  // routes: routes
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  // router: router
  render: h => h(App)
})
