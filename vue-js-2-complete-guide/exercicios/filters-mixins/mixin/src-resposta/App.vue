<template>
  <div class="container">
		<h3>App.vue</h3>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Mixins - App.vue</h1>

				<!-- "filterText" está no fuitMixin.js -->
        <input v-model="filterText" />
        <ul>
					<!-- "filteredFruits" está no fuitMixin.js -->
          <li
						v-for="(fruit, index) in filteredFruits"
						v-bind:key="index"
					>{{ fruit }}</li>
        </ul>

				<hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
	import List from './List.vue';
	import { fruitMixin } from "./fruitMixin";

	export default {
		mixins: [fruitMixin],
		data() {
			return {
				text: "Hello there!",
			};
		},
		filters: {
			toUppercase(value) {
				return value.toUpperCase();
			}
		},
		components: {
			appList: List
		}
	};
</script>

<style>
</style>
