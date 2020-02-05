npm install
npm run dev
npm run build - build for production with minification


As configuração do firebase foram feitas nos exemplos anteriores.

OBS:
Se recarregar a página perde o token.

# store.js
getters -> isAuthenticated

# header.vue
Usa o store para validar qual item do menu exibir caso o usuário esteja logado ou não.
