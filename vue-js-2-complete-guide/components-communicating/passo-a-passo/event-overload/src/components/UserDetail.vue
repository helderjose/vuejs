<template>
  <div class="component">
    <h3>UserDetail.vue</h3>

    <Common
      @on-itemClicked="myFunc1('detailParam1')">
    </Common>
  </div>
</template>

<script>
  import Common from "./Common.vue"

	export default {
    components: {
      Common
    },
    methods: {
      myFunc1
    }
  }

  function myFunc1(param) {
    console.log("UserDetail.vue -> myFunc1()");
    console.log('param:', param, '\n\n\n')
  }
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
