npm install
npm run dev
npm run build - # build for production with minification

npm install --save vuex@2.0.0
"babel-preset-stage-2@6.18.0

Esse exemplo separa o store em módulos (um para o counter e outro para o value) e
depois centraliza tudo no store.js.
A funcionalidade do exemplo continua igual aos exemplos anterios.

# store/modules/counter.js
Cria parte do state referente ao counter e depois centraliza no state.js (main state).
Declaração do state, getters, mutations e actions referente ao counter.

# store/modules/value.js
Está pendente para eu organizar igual ao store/modules/counter.js

# store.js
Usa o recurso "modules" do Vuex.Store.
Usa o counter.js no "modules"