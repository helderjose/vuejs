npm install
npm run dev
npm run build - build for production with minification


As configuração do firebase foram feitas nos exemplos anteriores.

OBS:
Se recarregar a página perde o token.

https://firebase.google.com/docs/reference/rest/auth
https://firebase.google.com/docs/reference/rest/auth#section-refresh-token

# Conteúdo do Exemplo
Faz logout automaticamente depois de um determinado tempo.


# store.js
actions -> setLogoutTimer
actions -> login -> chama o setLogoutTimer
actions -> signup -> chama o setLogoutTimer


# Teste
No store.js, descomente a linha
// }, expirationTime)
faça login e espere um pouco, vai fazer logout automaticamente.