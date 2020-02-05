import Vue from "vue";
import Vuex from "vuex";
import axios from './axios-auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {},
  actions: {
    signup({ commit }, authData) {
      axios.post('/:signUp?key=AIzaSyBSVpfxZex5yocW39rQZ9oZProTGLywkeg', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    login({ commit }, authData) {
      axios
        .post("/:signInWithPassword?key=AIzaSyBSVpfxZex5yocW39rQZ9oZProTGLywkeg", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
  },
  getters: {}
});
