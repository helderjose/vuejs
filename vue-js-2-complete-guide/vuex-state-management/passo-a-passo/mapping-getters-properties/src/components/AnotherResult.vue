<template>
  <div>
		<p>Counter is: {{ doubleCounter }} - AnotherResult.vue -> getter doubleCounter</p>
	<p>Number of Clicks: {{ stringCounter }} - AnotherResult.vue -> getter  stringCounter</p>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters([
				'doubleCounter',
				'stringCounter'
			])
		}};
</script>