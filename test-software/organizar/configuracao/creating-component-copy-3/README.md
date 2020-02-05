Os testes estão funcionando com o mínimo de alteração do original,
precisa do .babelrc precisa do "babel-preset-env" para usar o "env" no .babelrc


# Plugins para configurar o test
## package.json
Todas essas são dependências de dev
"babel-preset-env": "^1.7.0",
"@vue/test-utils": "^1.0.0-beta.25",
"babel-jest": "^21.2.0",
"jest": "^21.2.1",
"jest-serializer-vue": "^0.2.0",
"vue-jest": "^2.6.0",
"vue-server-renderer": "^2.4.4",
"vue-template-compiler": "^2.4.4",  // também funcionou sem esse, mas tbm é usado em teste: https://www.npmjs.com/package/vue-template-compiler

Ainda no package.json tem as configurações do jest
e o script     "test": "jest"



# Comandos
npm install
npm run dev

http://localhost:8080/

# src/Home.vue

# main.js

# App.vue