<template>
  <div style="background-color: aquamarine;">
    <h3>AnotherResult.vue</h3>
    <p>Counter is: {{ doubleCounter }} - doubleCounter</p>
    <p>Number of Clicks: {{ stringCounter }} - stringCounter</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(
			["doubleCounter", "stringCounter"]
		)
  }
};
</script>