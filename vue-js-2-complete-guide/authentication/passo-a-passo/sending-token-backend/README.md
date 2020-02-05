npm install
npm run dev
npm run build - build for production with minification


As configuração do firebase foram feitas nos exemplos anteriores.

# Conteúdo do Exemplo
Passa o token do usuário logado para o backend.

# store.vue


# dashboard.vue


# Teste
teste 1:
http://localhost:8080/signup -> crie um usuário
firebase -> vue-update -> database -> data -> novo usuário deve aparecer na lista

teste 2:
http://localhost:8080/dashboard -> recarregue a página
vai aparecer "false" no parágrafo do email.

teste 3:
http://localhost:8080/signin -> recarregue a página
faça login -> clique em "Dashboard" -> vai aparecer o email no parágrafo.