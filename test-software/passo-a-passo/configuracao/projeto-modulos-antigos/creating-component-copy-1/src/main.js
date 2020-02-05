import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// nome da tag do componente, vai ser usado no App.vue
Vue.component('app-server-status', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
