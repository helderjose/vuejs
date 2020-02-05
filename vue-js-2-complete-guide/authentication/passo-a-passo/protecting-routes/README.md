npm install
npm run dev
npm run build - build for production with minification


As configuração do firebase foram feitas nos exemplos anteriores.

# Conteúdo do Exemplo
Protecting Routes (Auth Guard).
Proteje a rota do Dashboard

# router.js
Usa o store.js.
Olhar "beforeEnter"

# Teste
http://localhost:8080/signup -> recarregue a página para perder o token ->
clique em "Dashboard", vai redirecionar para a tela de login -> faça
login e clique em "Dashboard", vai abrir a página.