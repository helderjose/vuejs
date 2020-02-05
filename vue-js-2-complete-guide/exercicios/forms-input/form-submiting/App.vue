<template>
  <div class="container">
    <form>

      <!--
        Quando tem apenas um botão no form, por padrão ele faz o submit do form.
        @click.prevent -> para previnir a ação default, que é o submit do form.
      -->
      <button
        @click.prevent="submitted"
      >Submit!</button>
    </form>

  </div>
</template>

<script>
	import Switch from "./Switch.vue";

	export default {
		methods: {
			submitted() {
				// ações após fazer submit do form.
			}
		},
	};
</script>

<style>
</style>
