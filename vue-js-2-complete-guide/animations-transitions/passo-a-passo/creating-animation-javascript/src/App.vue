<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>

				<button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
				<br/><br/>

				<!--
					:css="false" -> não vai usar classe css, vai usar javascript.
					Os event listeners na tag <transition> é o ciclo de vida da animção.
				-->
				<transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			show: false,
			load: true,
			alertAnimation: "fade",
			elementWidth: 100,
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
					/*
					done() é quando esse passo da animação termina. para poder ir para o próximo ciclo.
					Se não usar o done() a animação fica parada nessa parte do ciclo.
					*/
          done();
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
  }
};
</script>

<style>
</style>
