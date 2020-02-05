npm install
npm run dev
npm run build
http://localhost:8080/

# Objetivo
Usando event bus, alternar a idade entre 27 e 30 ao clicar em "Edit Age".
Ao terminar o exercício não pode ter erro no console.


# main.js
Cria o eventBus.

# User.vue
Faz o watch ($on) na function "ageWasEdited" do eventBus

# UserEdit.vue
Chama o eventBus que faz o $emit



# UserDetail.vue
Igual ao exemplo anterior. Não precisa fazer nada nesse exemplo.



