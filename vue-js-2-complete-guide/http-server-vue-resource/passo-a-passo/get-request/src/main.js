import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

// Vue.use -> adiciona o plugin ao core de funcionalidade do vue
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
