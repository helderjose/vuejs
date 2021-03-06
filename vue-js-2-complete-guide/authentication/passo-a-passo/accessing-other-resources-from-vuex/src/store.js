import Vue from "vue";
import Vuex from "vuex";
import axios from './axios-auth'

// acho que globalAxios usa a instância do axios do main.js
import globalAxios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    signup({ commit, dispatch }, authData) {
      axios.post('/:signUp?key=AIzaSyBSVpfxZex5yocW39rQZ9oZProTGLywkeg', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch("storeUser", authData);
        })
        .catch(error => console.log(error))
    },
    login({ commit }, authData) {
      axios
        .post("/:signInWithPassword?key=AIzaSyBSVpfxZex5yocW39rQZ9oZProTGLywkeg", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(error => console.log(error));
    },
    storeUser({ commit }, userData) {
      // esse manda para o database do firebase
      globalAxios
        .post("/users.json", userData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    fetchUser({ commit }) {
      globalAxios.get('/users.json')
        .then(res => {
          console.log(res);

          const data = res.data;
          const users = [];

          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }

          console.log(users)
          commit('storeUser', users[0])

        })
        .catch(error => console.log(error))
    }

    
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
});
