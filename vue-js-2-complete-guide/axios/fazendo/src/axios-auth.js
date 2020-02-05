import axios from 'axios'

// cria uma instância do axios
const instance = axios.create({
  baseURL: 'https://vue-update.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance