npm install
npm run dev
npm run build - build for production with minification


# New.vue


# Teste
- Mude para o component "New";
- Use o botão "Increase";
- Selecione outro component;
- Volte para o component "New";
Verá que o componente é reinicializado (destruído). ) hook "destroyed" é chamado ao sair do New.vue.

O próximo exemplo vai manter o componente o componente "vivo", mantendo o valor de "counter"