var data = {
	title: 'The VueJS Instance',
	showParagraph: false
}

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated) - pelo método show');

      console.log(this.$refs)
      console.log(this.$refs.myButton)

      // altera o texto do botao
      this.$refs.myButton.innerText = 'Test - Alterado pelo $refs.myButton';
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

// vm1.newProp = 'New!'; // we're not able to create a new property because I can't use it in my vue instance
// console.log(vm1);
// console.log(vm1.$data === data);

vm1.$refs.heading.innerText = 'Something else - usando $refs.heading';

setTimeout(function () {
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);

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


var vm3 = new Vue({
	template: '<h1>Hello! - #app3</h1>'
});


vm3.$mount('#app3');

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);