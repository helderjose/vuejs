npm install
npm run dev
npm run build - # build for production with minification

npm install --save vuex@2.0.0
"babel-preset-stage-2@6.18.0

# store/actions.js
# store/getter.js
# store/mutations.js

# store.js
Usa as actions, getters e mutations


# Anotações
Esse exemplo separa as actions, getters e mutations em arquivos separados.
Isso pode ser feito para coisa que é comum na aplicação, quando
for coisa específica pode ser feito igual a pasta
store/modules/counter.js
Também pode ser feito
store/modules/counter/getters.js
store/modules/counter/mutations.js
store/modules/counter/actions.js