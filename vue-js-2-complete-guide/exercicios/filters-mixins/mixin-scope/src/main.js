import Vue from 'vue'
import App from './App.vue'

// global mixin
Vue.mixin({
  created() {
    // created é um Hook
    /*
      será executado três vezes, uma para app.vue, list.vue e o new Vue do main.js,
      na seguinte ordem:
      1 - new Vue (main.js)
      2 - App.vue
      3 - List.vue
    */
    console.log("main.js -> created()");
  }
});

// global filter
// Vue.filter('to-lowercase', function(value) {
//   return value.toLowerCase();
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
