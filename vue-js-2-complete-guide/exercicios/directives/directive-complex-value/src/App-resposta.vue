<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>

				<!-- diretiva local com múltiplos modificadores e complex values to diretive -->
				<p
          v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
        >Color this, too. - diretiva local com múltiplos modificadores e complex values to diretive</p>
      </div>
    </div>
  </div>
</template>

<script>
	/*
		Crie uma local diretive que troque a cor do background do elemento entre vermelho e azul a cada um segundo,
		esse processo deve começar depois de três segundos após o carregamento da página.

		nome da diretiva: local-highlight
		parâmetro: background
		modificadores: delayed, blink
	*/
	export default {
		directives: {
			"local-highlight": {
				bind(el, binding, vnode) {
					var delay = 0;

					if (binding.modifiers["delayed"]) {
						delay = 3000;
					}

					if (binding.modifiers["blink"]) {
						let mainColor = binding.value.mainColor;
						let secondColor = binding.value.secondColor;
						let currentColor = mainColor;

						setTimeout(() => {

							setInterval(() => {
								// currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
								currentColor = currentColor == secondColor ? mainColor : secondColor;

								if(binding.arg == 'background') {
									el.style.backgroundColor = currentColor;
								} else {
									el.style.color = currentColor;
								}

							}, binding.value.delay);

							if (binding.arg == "background") {
								el.style.backgroundColor = binding.value;
							} else {
								el.style.color = binding.value;
							}

						}, delay);

					} else {

						setTimeout(() => {
							if (binding.arg == "background") {
								el.style.backgroundColor = binding.value.mainColor;
							} else {
								el.style.color = binding.value.mainColor;
							}
						}, delay);
					}
				}
			}
		}
	};
</script>

<style>
</style>
