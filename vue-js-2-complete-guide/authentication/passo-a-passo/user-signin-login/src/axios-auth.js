import axios from 'axios'

// cria uma instância do axios
const instance = axios.create({
  // baseURL: 'https://vue-update.firebaseio.com'
  // baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]'
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance