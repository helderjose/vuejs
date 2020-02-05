<template>
  <div style="background-color: chocolate">
    <h3>AnotherResult.vue</h3>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
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