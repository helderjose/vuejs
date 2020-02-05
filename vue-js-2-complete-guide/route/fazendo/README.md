npm install
npm run dev
npm run build - build for production with minification

npm install --save vue-router@2.0.1


# routes.js


# Anotações
Lazy load é fazer o download do componente só quando precisa dele.

# Teste
Obs: Fazer o teste em aba privada por causa do cache.
Teste 1:
Abre a develop tool -> aba network
Na página home vai fazer download do bundle.js de 1.8MB
Na página user vai fazer o download de um bundle.js de 8.27KB e outro de 8.18KB


Teste 2:
No routes.js comente o primeiro bloco de constantes e descomente o segundo bloco.
Refaça o primeiro teste e veja que será gerado um bundle maior quando clica em "user".