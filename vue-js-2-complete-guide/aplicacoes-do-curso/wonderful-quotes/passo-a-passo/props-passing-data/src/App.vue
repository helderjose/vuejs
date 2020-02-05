<template>
  <div class="container">
		<!-- passa os quotes para o QuoteGrid -->
		<app-quote-grid
			:quotes="quotes"
		></app-quote-grid>
	</div>
</template>

<script>
	import QuoteGrid from "./components/QuoteGrid.vue";

	export default {
		data: function() {
			return {
				quotes: ["Just a Quote to see something"],
				maxQuotes: 10
			};
		},
		// registra o QuoteGrid para usar na tag <template>
		components: {
			appQuoteGrid: QuoteGrid
		}
	};
</script>

<style>
</style>
