<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>

				<button
					class="btn btn-primary"
					@click="addItem"
				>Add Item</button>
        <br />
        <br />
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              @click="removeItem(index)"
              style="cursor: pointer"
              :key="number"
            >{{ number }}</li>
          </transition-group>
        </ul>				
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
				show: false,
				load: true,
				alertAnimation: "fade",
				elementWidth: 100,
				selectedComponent: "app-success-alert",
				numbers: [1, 2, 3, 4, 5]
			};
		},
		methods: {
			beforeEnter(el) {
				console.log("beforeEnter");
				this.elementWidth = 100;
				el.style.width = this.elementWidth + "px";
			},
			enter(el, done) {
				console.log("enter");
				let round = 1;
				const interval = setInterval(() => {
					el.style.width = this.elementWidth + round * 10 + "px";
					round++;
					if (round > 20) {
						clearInterval(interval);
						done();	// done é quando esse passo da animação termina. para poder ir para o próximo ciclo.
					}
				}, 20);
			},
			afterEnter(el) {
				console.log("afterEnter");
			},
			enterCancelled(el) {
				console.log("enterCancelled");
			},
			beforeLeave(el) {
				console.log("beforeLeave");
				this.elementWidth = 300;
				el.style.width = this.elementWidth + "px";
			},
			leave(el, done) {
				console.log("leave");
				let round = 1;
				const interval = setInterval(() => {
					el.style.width = this.elementWidth - round * 10 + "px";
					round++;
					if (round > 20) {
						clearInterval(interval);
						done();
					}
				}, 20);
			},
			afterLeave(el) {
				console.log("afterLeave");
			},
			leaveCancelled(el) {
				console.log("leaveCancelled");
			},
			addItem() {
				const pos = Math.floor(Math.random() * this.numbers.length);
				this.numbers.splice(pos, 0, this.numbers.length + 1);
			},
			removeItem(index) {
				this.numbers.splice(index, 1);
			}
		},
		components: {
			appDangerAlert: DangerAlert,
			appSuccessAlert: SuccessAlert
		}
	};
</script>

<style>
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

		/*
		Para a lista reagrupar assim que clicar no item, não
		esperar a animação acabar para agrupar os itens.
		Só que isso faz o div perder o width quando clica para remover.
		*/
		position: absolute;
	}

	/* .slide-move é do exemplo transition-group */
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
