npm install
npm run dev
npm run build - build for production with minification

npm install --save vue-router@2.0.1


Preciso editar esse arquivo todo,
Renderiza dentro e fora do drawer mantendo o padrão da url, ex:
No drawer:
http://localhost:8080/diagnostic/product-selection
http://localhost:8080/diagnostic/issue-selection
Fora do drawer:
http://localhost:8080/diagnostic/billing-warning

O drawer é a parte laranja.


Esse exemplo renderiza alguns componentes dentro do drawer e
outros fora, preciso organizar melhor.

# App.vue
header-top e header-bottom

# routes.js


# Teste
Na home o cabeçalho fica no topo "header-top"
Na página user o cabeçalho fica em baixo "header-bottom"



Teste drawer, olhar routes.js
