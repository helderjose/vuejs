<template>
  <div class="container" style="border: solid 1px #000;">
    <h3>App.vue</h3>
    <form>
			<div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

          <!--
            Acho que o v-model faz o biding com a (props: ["value"]) do Switch.vue
          -->
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // importa o Switch.vue
	import Switch from "./Switch.vue";

	export default {
		data() {
			return {
				dataSwitch: true
			}
		},
		components: {
      // registra o component appSwitch
			appSwitch: Switch
		}
	};
</script>

<style>
</style>
