<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
				<hr />

				<select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>

				<button class="btn btn-primary" @click="show = !show">Show Alert</button> <br /><br />


				<!--
					out-in -> let the old element animate out first and then animate in the new one.
					in-out -> does the opposite.
					obs: deixe apenas um elemento visível por vez.
					Use mode e key
				-->
				<!-- <transition :name="alertAnimation"> -->
				<transition :name="alertAnimation" mode="out-in">
					<div class="alert alert-info" v-if="show" key="info">This is some Info</div>
					<div class="alert alert-warning" v-else key="warning">This is some Warning</div>
				</transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			show: true,
			alertAnimation: "fade",
		};
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

	.slide-enter {
		opacity: 0;
	}

	.slide-enter-active {
		/* o "slide-in" é o @keyframes slide-in {... abaixo */
		animation: slide-in 1s ease-out forwards;
		transition: opacity .5s;
	}

	.slide-leave {
	}

	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 1s;
		opacity: 0;
	}

	.slide-move {
		transition: transform 1s;
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>
