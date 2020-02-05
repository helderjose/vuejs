import axios from 'axios'

// cria uma instância do axios
// a url foi pega no dosc do firebase, olhe o arquivo readme.md
const instance = axios.create({
  // baseURL: 'https://vue-update.firebaseio.com'
  // baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]'
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts'
})


export default instance