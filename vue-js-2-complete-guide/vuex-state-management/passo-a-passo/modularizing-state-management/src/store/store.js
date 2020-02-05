import Vue from "vue";
import Vuex from "vuex";
import counter from './modules/counter'

Vue.use(Vuex);

/*
A parte do "counter" foi tirada daquie e colocada em um arquivo separado.
A parte do "value" continua aqui mas o certo é fazer o mesmo que fez com "counter"
*/
export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters: {
    value: state => {
      return state.value;
    }
  },
  mutations: {
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    updateValue({commit}, payload) {
      commit('updateValue', payload);
    }
  },
  modules: {
    counter
  }
});
