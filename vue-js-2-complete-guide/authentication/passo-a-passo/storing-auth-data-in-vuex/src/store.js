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
  mutations: {
    // authUser vai ser armazenada no store
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    }
  },
  actions: {
    signup({ commit }, authData) {
      axios.post('/:signUp?key=AIzaSyBSVpfxZex5yocW39rQZ9oZProTGLywkeg', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          // console.log(res);

          // popula authUser declarada na mutations
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
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
          // console.log(res);

          // popula authUser declarada na mutations
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(error => console.log(error));
    },
  },
  getters: {}
});
