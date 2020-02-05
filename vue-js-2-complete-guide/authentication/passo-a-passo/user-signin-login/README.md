npm install
npm run dev
npm run build - build for production with minification


As configuração do firebase foram feitas nos exemplos anteriores.

# Firebase
https://firebase.google.com/docs/reference/rest/auth/#section-sign-in-email-password

Nessa url tem os parâmetros esperado pelo serviço firebase.
https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


# sigin.vue
Usa a instância do axios criada em axios-auth.js.
Faz um post para a api de login do firebase.


# Teste
http://localhost:8080/signin
Tente um usuário criado no exemplo anterior.