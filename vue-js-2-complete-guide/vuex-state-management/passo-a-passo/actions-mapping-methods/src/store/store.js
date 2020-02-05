import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      console.log("store.js -> getters -> doubleCounter");
      return state.counter * 2;
    },
    stringCounter: state => {
      console.log("store.js -> getters -> stringCounter");
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: (state, payload) => {
      console.log("store.js -> mutations -> increment");
      state.counter += payload;
    },
    decrement: (state, payload) => {
      console.log("store.js -> mutations -> decrement");
      state.counter -= payload;
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      console.log("store.js -> actions -> increment");
      commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
      console.log("store.js -> actions -> decrement");
      commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
      console.log("store.js -> actions -> asyncIncrement");
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      console.log("store.js -> actions -> asyncDecrement");
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    }
  }
});
