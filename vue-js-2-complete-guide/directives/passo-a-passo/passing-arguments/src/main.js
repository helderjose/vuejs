import Vue from "vue";
import App from "./App.vue";

// "highlight" é o nome da diretiva. No html use com "v-highlight"
Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // console.log('el ', el)
    // console.log('binding ', binding)

    if(binding.arg == 'background') {
      // cor do background
      el.style.backgroundColor = binding.value;
    } else {
      // cor da fonte
      el.style.color = binding.value;
    }

  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
