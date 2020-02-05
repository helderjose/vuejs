npm install
npm run dev
npm run build
http://localhost:8080/


# main.js
Cria o eventBus.

# User.vue
Cria o eventBus.$on

# UserEdit.vue
Cria o eventBus.$emit

# UserDetail.vue
Apenas exibe "age"

# Anotações
Nesse exemplos os métodos do eventBus estão espalhado no User.vue e no UserEdit.vue, o
próximo exemplo centraliza esses métodos.

# Explicação do Exemplo
Clique no botão "Edit Age" do UserEdit.vue. Vai mudar a idade
do User.vue, UserEdit.vue e do UserDetail.vue.
Os outros recursos são dos exemplos anteriores.

