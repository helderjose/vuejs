<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>

				<!-- usando a diretiva local -->
				<p
          v-local-highlight:background.delayed="'red'"
        >Color this, too. Com local directive</p>
      </div>
    </div>
  </div>
</template>

<script>
	export default {

		// declarando a diretiva local
		directives: {
			"local-highlight": {
				bind(el, binding, vnode) {
					var delay = 0;

					if (binding.modifiers["delayed"]) {
						delay = 3000;
					}

					setTimeout(() => {
						if (binding.arg == "background") {
							console.log('no if do setTimeout() local directive')
							el.style.backgroundColor = binding.value;
						} else {
							el.style.color = binding.value;
						}
					}, delay);
				}
			}
		}
	};
</script>

<style>
</style>
