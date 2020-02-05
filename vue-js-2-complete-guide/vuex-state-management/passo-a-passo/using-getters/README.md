npm install
npm run dev
npm run build - # build for production with minification

npm install --save vuex@2.0.0

Esse exemplo usa as variáveis do state nas funções dos componentes, mais para frente
essas funções vão para o state e faremos o map dessas funções e properties.

# store.js
declara o getter "doubleCounter"

# Counter
Incremente e decrementa this.$store.state.counter

# Result.vue
usa o getter this.$store.state.counter

# AnotherResult.vue
usa o getter "doubleCounter" this.$store.getters.doubleCounter



