
// variável fora da instância vue
var data = {
	title: 'The VueJS Instance',
	showParagraph: false
}

var vm1 = new Vue({
  el: '#app1',
  data: data,   // atribuindo data
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

// vm1.newProp = 'New!'; // we're not able to create a new property because I can't use it in my vue instance


console.log(vm1);   // Olhe o $el e o $data
console.log(vm1.$data === data);    // comparando o data do var com o data da instância

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
