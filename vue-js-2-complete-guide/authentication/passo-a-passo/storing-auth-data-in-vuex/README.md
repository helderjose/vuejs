npm install
npm run dev
npm run build - build for production with minification


As configuração do firebase foram feitas nos exemplos anteriores.

# Conteúdo do Exemplo
Armazena informação de login na store a aplicação.

# store.js
Gerencia a store

# signup.vue
Usa o store.js para chamar a api do firebase;
# signup.vue
Usa o store.js para chamar a api do firebase;



# Teste
teste 1:
http://localhost:8080/signup
Crie um novo usuário -> devtools -> vue -> Switch to Vuex -> vai ter a variável "authUser" com informação do usuário.

teste 2:
http://localhost:8080/signin
recarregue a página para limpar o store
Faça login com o usuário criado
vai popular a variável "authUser" do store
