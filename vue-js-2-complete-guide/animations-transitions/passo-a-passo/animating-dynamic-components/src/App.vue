<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>

				<button
          class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
        >Toogle Components</button>
        <br />
        <br />
				<!-- o fade deve coincidir com o .fade do css -->
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
	import DangerAlert from "./DangerAlert.vue";
	import SuccessAlert from "./SuccessAlert.vue";

	export default {
		data() {
			return {
				selectedComponent: "app-success-alert",
			};
		},
		components: {
			appDangerAlert: DangerAlert,
			appSuccessAlert: SuccessAlert
		}
	};
</script>

<style>
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 1s;
	}

	.fade-leave {
		/*opacity: 1;*/
	}

	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}

</style>
