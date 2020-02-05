import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'


Vue.use(VueResource); // Vue.use -> adiciona o plugin ao core de funcionalidade do vue

Vue.http.options.root = 'https://vue-js-http-cd6fb.firebaseio.com/data.json';

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  
  if (request.method == 'POST') {
    console.log("esse exemplo muda POST para PUT.");
    console.log("Não descomente a linha abaixo porque vai deixar só um usuário no firebase");
    // request.method = 'PUT';
  }

  next();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
