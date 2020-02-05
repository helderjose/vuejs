<template>
  <div class="container">
		<h3>App.vue</h3>
    <div class="row">
      <div class="col-xs-12">
				<app-quote>
					<h2 slot="title">{{ quoteTitle }}</h2>

					<!-- vai no default slot -->
					<p>A wonderful Quote</p>
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
