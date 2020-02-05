npm install
npm run dev
npm run build - # build for production with minification

npm install --save vuex@2.0.0


# store.js
Cria o store

# main.js
Usa o store

# Counter.vue
Incremeta e decrementa a variável this.$store.state.counter

# Result.vue
Apenas exibe a variável this.$store.state.counter

# App.vue
Só usa Counter.vue e Result.vue

# Anotações
Primeiro exemplo usando state, será melhorado nos próximos exemplos.


# Observação
No devtools do navegador abra a vue devtools e clique na opção "Switch to Vuex", clique na linha verde "Base state".
Observe que ao usar a aplicação o state não é atualizado ainda, mas quando atualiza o state (pela devtool) a
aplicação é atualizada.