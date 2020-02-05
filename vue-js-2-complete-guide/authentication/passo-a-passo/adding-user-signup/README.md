npm install
npm run dev
npm run build - build for production with minification

Esse exemplo cria o usuário na base do firebase.
obs: senha tem que ter 6 caracteres


https://firebase.google.com/docs/reference/rest/auth/

# axios-auth.js
Configura a instância do axios.

# signup.vue
Usa a instância do axios cria da no axios-auth.js


# api
https://firebase.google.com/docs/reference/rest/auth/
https://firebase.google.com/docs/reference/rest/auth/#section-create-email-password

https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
API_KEY é pega no firebase, olhar mais para baixo.

A url desse projeto é monta da da seguinte maneira
base_url do axios-auth.js: https://identitytoolkit.googleapis.com/v1/accounts
signup.vue: /:signUp?key=AIzaSyBSVpfxZex5yocW39rQZ9oZProTGLywkeg
junto fica: https://identitytoolkit.googleapis.com/v1/accounts/:signUp?key=AIzaSyBSVpfxZex5yocW39rQZ9oZProTGLywkeg


# Firebase
Com o projeto vue-update selecionado, faça os seguinte passos:
ícone engrenagem -> Configurações do projeto -> chave de api web

# Teste
http://localhost:8080/signup
preencher email e senha já é suficiente
para ver o usuário criado vá em firebase -> vue-update -> authentication
