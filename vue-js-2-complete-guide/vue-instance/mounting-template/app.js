var data = {
	title: 'The VueJS Instance',
	showParagraph: false
}

// não usa "el" vai usar mount
var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated) - pelo método show');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// use mount quando quiser ter a instancia configurada para depois montá-la.
// mesmo que usar 'el' só muda a sintaxe
vm1.$mount('#app1');


// usando "el" para montar a instância
var vm2 = new Vue({
	el: '#app2',
	data: {
		title: 'The second Instance'
  },
  methods: {
		onChange: function () {
			vm1.title = 'Changed by second instance';
		}
	}
});


// usa template e mount
var vm3 = new Vue({
	template: '<h1>Hello! - #app3</h1>'
});


vm3.$mount('#app3');

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);