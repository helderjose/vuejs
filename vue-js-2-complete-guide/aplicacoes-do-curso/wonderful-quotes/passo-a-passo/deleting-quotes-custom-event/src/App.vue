<template>
  <div class="container">
		<app-new-quote @quoteAdded="newQuote"></app-new-quote>

		<!-- "quoteDeleted" foi declarado no QuoteGrid.vue -->
		<app-quote-grid
			:quotes="quotes"
			@quoteDeleted="deleteQuote"
		></app-quote-grid>

		<div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
	</div>
</template>

<script>
	import QuoteGrid from "./components/QuoteGrid.vue";
	import NewQuote from "./components/NewQuote.vue";

	export default {
		data: function() {
			return {
				quotes: ["Just a Quote to see something"],
				maxQuotes: 10
			};
		},
		methods: {
			newQuote(quote) {
				this.quotes.push(quote);
			},
			deleteQuote(index) {
				console.log("App.vue -> deleteQuote()")
				this.quotes.splice(index, 1);
			}
		},
		components: {
			appQuoteGrid: QuoteGrid,
			appNewQuote: NewQuote,
		}
	};
</script>

<style>
</style>
