<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";

  export default {
    components: {
			appHeader: Header
		}
  };
</script>

<style>
	body {
		padding: 30px;
	}

	.slide-enter-active {
		animation: slide-in 200ms ease-out forwards;
	}

	.slide-leave-active {
		animation: slide-out 200ms ease-out forwards;
	}

	@keyframes slide-in {
		from {
			transform: translateY(-30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(-30px);
			opacity: 0;
		}
	}
</style>


