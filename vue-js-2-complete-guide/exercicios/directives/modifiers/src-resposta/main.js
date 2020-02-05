import Vue from "vue";
import App from "./App.vue";

// "highlight" é o nome da diretiva. No html use com "v-highlight"
Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // console.log('el ', el)
    // console.log('binding ', binding)

    var delay = 0;


    // pinta background do segundo p de laranja (depois de trẽs segundos).
    if (binding.modifiers["delayed"]) {
      delay = 3000;

      setTimeout(() => {
        if (binding.arg == "background") {
          console.log('no if do setTimeout()')
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      }, delay);
    }

    /*
      pinta o background do primeiro "p" com vermelho.
      pinta a cor do terceiro "p" de vermelho
    */
    if(!Object.keys(binding.modifiers).length) {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
