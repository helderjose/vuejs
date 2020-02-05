<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr/>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  // data deve ser uma function
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    // sem a palavra chave function
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>