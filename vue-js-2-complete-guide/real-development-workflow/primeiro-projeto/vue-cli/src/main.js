import Vue from 'vue'
import App from './App.vue'

new Vue({
  // o #app é o do index.html
  el: '#app',

  /*
    essa função vai renderizar um certo template automaticamente
    no lugar do #app
  */
  render: h => h(App)
})
