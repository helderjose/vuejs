npm install
npm run dev
npm run build - # build for production with minification

npm install --save vuex@2.0.0
"babel-preset-stage-2@6.18.0

Nesse exemplos, as async actions estão usando setTimeout para simular o async.

# store.js
declara as "actions" e umas actions assíncronas

# Counter.vue
Faz o map das actions usando (import { mapActions } from 'vuex';).
Usa as actions passando o parâmetro "payload". (só pode passar um parâmetro, pode ser um objeto)

# AnotherCounter.vue
Faz o map das actions usando (import { mapActions } from 'vuex';).
Usa as actions (async) usando mapActions, passando parâmetro, usa um objeto para
simular a passagem de vários parâmetros.


# Result.vue
Usa os getters, igual aos exemplos anteriores.

# AnotherResult.vue
Usa os getters, igual aos exemplos anteriores.