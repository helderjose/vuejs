<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
				<hr />

				<button class="btn btn-primary" @click="show = !show">Clique para testar</button> <br /><br />

				<transition
					enter-active-class="animated bounce"
					leave-active-class="animated shake">
					<div class="alert alert-info" v-if="show">bounce e shake</div>
				</transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			show: true
		};
  }
};
</script>

<style>
</style>
