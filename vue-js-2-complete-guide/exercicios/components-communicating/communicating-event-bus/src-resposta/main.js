import Vue from 'vue'
import App from './App.vue'

// cria uma nova instancia Vue para usar como eventBus
// obs: o próximo exemplo vai centralizar as functions aqui, nesse exemplo está as funcions estão espalhadas nos componentes.
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
