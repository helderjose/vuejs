<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
				<app-quote>
					<!-- o nome do slot foi declarado no Quote.vue -->
					<h2 slot="title">{{ quoteTitle }}</h2>
					<p slot="content">A wonderful Quote</p>
				</app-quote>
			</div>
    </div>
  </div>
</template>

<script>
	import Quote from "./components/Quote.vue";

	export default {
		data: function() {
			return {
				quoteTitle: "The Quote",
				selectedComponent: "appQuote"
			};
		},
		components: {
			appQuote: Quote
		}
	};
</script>

<style>
</style>
