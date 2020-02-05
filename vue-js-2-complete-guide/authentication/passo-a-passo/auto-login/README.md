npm install
npm run dev
npm run build - build for production with minification


As configuração do firebase foram feitas nos exemplos anteriores.

# Conteúdo do Exemplo
Faz login e armazena no localStorage.
Limpa o localStorage quando faz logout.

# store.js
actions -> signup -> localStorage
actions -> login -> localStorage
actions -> tryAutoLogin 
actions -> logout 

# App.vue
usa o tryAutoLogin do store.js

# Teste
Faça login -> clique em Dashboar -> recarregue a página, deve continuar logado.