npm install
npm run dev
npm run build - build for production with minification

# App.vue
Exiba o valor digitado no input "password" apenas quando o usuário apertar "enter" ou mudar de campo.
Não use blur nem detectando que o enter foi pressionado, use o recurso do vue.js

A explicação está no fim do desse arquivo




























































# v-model.lazy
Not listen to the input event, (não atualiza conforme digita no input), só
vai fazer updade do valor digitado quando mudar de campo.
OBS: Existem mais opções como v-model.lazy.number ou v-model.lazy.trim por exemplo.

# Teste
Digite no campo password e mude para o email, veja que o valor do campo password só
é atualizado quando muda de campo.