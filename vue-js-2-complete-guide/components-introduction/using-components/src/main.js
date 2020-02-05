import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// registra os componentes globais

Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
