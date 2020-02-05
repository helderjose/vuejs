import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'


Vue.use(VueResource); // Vue.use -> adiciona o plugin ao core de funcionalidade do vue

Vue.http.options.root = 'https://vue-js-http-cd6fb.firebaseio.com/data.json';

new Vue({
  el: '#app',
  render: h => h(App)
})
