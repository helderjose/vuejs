npm install
npm run dev
npm run build - # build for production with minification

npm install --save vuex@2.0.0
npm install --save-dev babel-preset-stage-2@6.18.0
.babelrc -> usa o stage-2 para reconhecer o spread operator

# store.js
declara os getters "doubleCounter" e "stringCounter" (tem vários getters).

# Result.vue
Usa o getter this.$store.getters.doubleCounter.

# AnotherResult.vue
Usa os getters do store.js usando o mapGetters do vuex (import {mapGetters} from 'vuex').
usa o getter "stringCounter".



