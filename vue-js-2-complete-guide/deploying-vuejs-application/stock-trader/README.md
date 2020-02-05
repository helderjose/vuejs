npm install
npm run dev


Section 19: Deploying a VueJs Application
Fazer deploy em produção.

# build for production with minification
npm run build
Vai gerar a pasta build


# webpack.config.js
Olhe a parte
NODE_ENV: '"production"'

Esse exemplo faz deploy na AWS (não fiz na AWS)


# Passos
Getrar o dist/build.js
No server deixar a seguinte estrutura
/index.html
/dist/build.js