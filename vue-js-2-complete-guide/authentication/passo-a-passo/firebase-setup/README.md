npm install
npm run dev
npm run build - build for production with minification


# Configuração Firebase
projeto "vue-update"

Authentication -> configurar método de login -> email/senha [ativar]

database -> rules -> 

{
  "rules": {
    ".read": "auth != null",
    ".write": true
  }
}

".read": "auth != null",
auth é um objeto do firebase