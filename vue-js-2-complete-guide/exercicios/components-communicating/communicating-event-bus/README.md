npm install
npm run dev
npm run build
http://localhost:8080/


Quando o exercício for finalizado não deve ter nenhum erro
no console do navegador.

# Objetivo
A variável age começa com o valor 27, quando clicar em "Edit Age",
se for 27 muda para 30 se for 30 mudar para 27.
A variável deve ter o mesmo valor em todos os components.

# main.js
Cria o eventBus.

# User.vue
Cria o eventBus.$on

# UserEdit.vue
Cria o eventBus.$emit

# UserDetail.vue
Apenas exibe "age". Não precisa fazer nada nesse exemplo.

# Anotações
Nesse exemplos os métodos do eventBus estão espalhado no User.vue e no UserEdit.vue, o
próximo exemplo centraliza esses métodos.

# Explicação do Exemplo
Clique no botão "Edit Age" do UserEdit.vue. Vai mudar a idade
do User.vue, UserEdit.vue e do UserDetail.vue.
Os outros recursos são dos exemplos anteriores.

