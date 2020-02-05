import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

// se não colocar o mode: 'history', pega o hash por padrão
const router = new VueRouter({
  routes,  // routes: routes
  mode: 'history',


  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      // o hash foi declarado no UserDetail.vue
      return { selector: to.hash };
    }
    return {x: 0, y: 0};  // scroll position
  }
});

new Vue({
  el: '#app',
  router,
  // router: router
  render: h => h(App)
})
