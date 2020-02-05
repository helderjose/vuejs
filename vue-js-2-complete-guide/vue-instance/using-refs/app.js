var data = {
	title: 'The VueJS Instance',
	showParagraph: false
}

var vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated) - pelo método show');

      // ref
      console.log(this.$refs)
      console.log(this.$refs.myButton)

      // altera o texto do botao
      // myButton vem do index.html
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

// esse valor vai ser usado na tela mesmo depois de chamar o show() 
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
})
