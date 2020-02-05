npm install
npm run dev
npm run build - build for production with minification


As configuração do firebase foram feitas nos exemplos anteriores.

# Conteúdo do Exemplo

# Firebase Configurações
firebase -> vue-update (esse é o nome do projeto) -> database -> rules -> ".write": "auth != null"

OBS: Tomar cuidado com a URL que está chamando a api, porque
o exemplo tem duas instâncias do axios e cada uma está usando uma url diferente.

# store.js
import the main axios instance, name it "globalAxios".
globalAxios is the axios instance I will use for storing and fetching user data.

actions -> signup -> dispatch
actions -> storeUser

fetchUser pega o usuário criado e armazena na store da aplicação.

mutations -> storeUser
getters -> user

# dashboard.vue
"email" e "created"

# Teste
http://localhost:8080/dashboard
vai dar não autorizado porque ainda não passa o token do usuário para o firebase, será
resolvido no próximo exemplo.



# Teste
http://localhost:8080/signup
recarregue a página -> crie um usuário -> firebase -> authentication (o usuário vai ser criado) mas a segunda
chamada no app vai dar não autorizado