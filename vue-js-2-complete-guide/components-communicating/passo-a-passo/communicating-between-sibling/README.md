npm install
npm run dev
npm run build
http://localhost:8080/


# User.vue
Passa as propriedades "name" e "age" para os componentes filhos.

# UserDetail.vue
Faz um $emit para o User.vue, onde é atualizado a variável "age" que é passada com o
novo valor para UserDetail.vue e UserEdit.vue.

# UserEdit.vue


Esse exemplo usa a variável age.
Atualiza a variável age em UserEdit.vue, passa o novo valor
para User.vue que passa para UserDetail.vue

Os próximos exemplos vai mostra uma maneira melhor de fazer isso.