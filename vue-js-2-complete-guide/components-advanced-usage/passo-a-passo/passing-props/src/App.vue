<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">

				<!-- passa a prop "quote" para Quote.vue -->
				<app-quote
					quote="A wonderful Quote!"
				></app-quote>
			</div>
    </div>
  </div>
</template>

<script>
	import Quote from "./components/Quote.vue";

	export default {
		components: {
			appQuote: Quote
		}
	};
</script>

<style>
</style>
