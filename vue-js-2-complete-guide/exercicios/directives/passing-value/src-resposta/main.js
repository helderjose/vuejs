import Vue from "vue";
import App from "./App.vue";

// "highlight" é o nome da diretiva. No html use com "v-highlight"
Vue.directive("highlight", {
  bind(el, binding, vnode) {
    console.log('el ', el);
    console.log('binding ', binding)
    el.style.backgroundColor = binding.value;
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
