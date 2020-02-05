import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  // posso usar data aqui também
  // data: {

  // },
	methods: {
		changeAge(age) {
			this.$emit('ageWasEdited', age);
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
