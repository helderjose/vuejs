npm install
npm run dev
npm run build - build for production with minification

# Objetivo
Crie rotas para a página home e user, ao clicar nos links do App.vue deve mudar de página.


npm install --save vue-router@2.0.1

# package.json
vue-router

# routes.js
Configura as rotas e seus respectivos components.

# main.js
Usa o routes.js

# App.vue
Usa a tag "router-view"

O padrão é "hashhistory" por isso o # na url

http://localhost:8080
http://localhost:8080/#/user