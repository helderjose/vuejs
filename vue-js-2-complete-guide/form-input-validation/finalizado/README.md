npm install
npm run dev
npm run build - build for production with minification

npm install --save vuelidate@0.6.1

# Configurações Firebase Para o Exemplo
firebase -> vue-update -> database -> rules -> adicione o atributo "users"
{
  "rules": {
    ".read": "true",
    ".write": "auth != null",
      "users":{
        ".indexOn":["email"]
      }
  }
}
A configuração acima foi feita para conseguir pesquisar por email (indexOn).
".read": "true", para conseguir testar o exemplo sem precisa estar logado.


# signup.vue
campo "email" -> unique
axios

# Teste
http://localhost:8080/signup
No campo email use um email que já existe no firebase (database -> data)
