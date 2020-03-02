npm install
npm run dev
npm run build
http://localhost:8080/



Esse exemplo executar função de um componente em comum fazendo sobrecarga.

# Common.uve
Componete que será compartilhado entre outros componentes, ao clicar no
botão cada componente faz sua implementação da function.


# UserDetail.vue (componete filho)
Usa Common.vue e faz sua implementação da function.
Passa um parâmetro para a function.

# UserEdit.vue
Usa Common.vue e faz sua implementação da function.
Passa três parâmetros para a function.

# User.vue (componente pai)
Usa UserDetail.vue e UserEdit.vue

