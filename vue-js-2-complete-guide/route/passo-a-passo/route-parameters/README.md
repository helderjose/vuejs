npm install
npm run dev
npm run build - build for production with minification

npm install --save vue-router@2.0.1

Esse exemplo apenas configura a rota com parâmetro, o próximo
exemplo mostra como recuperar esse parâmetro no User.vue

# routes.js
Configura a rota para a página User.vue com parâmetro.

# main.js
Usa o routes.js

# Header.vue
Passa um parâmetro na url.

# Teste
Clique no link "user", vai carregar a página user usando o link http://localhost:8080/user/10.
Se tirar o parâmetro da url não vai carregar nada porque não tem a rota sem nada nesse exemplo.