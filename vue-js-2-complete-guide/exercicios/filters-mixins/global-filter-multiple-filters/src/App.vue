<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>

				<!--
					use o global filter aqui sem remover o filter toUppercase,
					o texto deve ficar em lowercase.
				-->
				<p>{{ text | toUppercase  }}</p>
      </div>
    </div>
  </div>
</template>

<script>
	// não precisa alterar nada aqui
	export default {
		data() {
			return {
				text: "Hello there!",
			};
		},

		// local filters. se quiser um filtro global declare no main.js
		filters: {
			toUppercase(value) {
				return value.toUpperCase();
			}
		}
	};
</script>

<style>
</style>
