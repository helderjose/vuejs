import Vue from 'vue'
import App from './App.vue'

/*
Crie uma instância do Vue para usar como event bus,
dê o nome de "eventBus"
*/


new Vue({
  el: '#app',
  render: h => h(App)
})
