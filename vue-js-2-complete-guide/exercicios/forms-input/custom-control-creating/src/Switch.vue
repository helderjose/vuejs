<template>
  <div style="background-color: bisque;">
    <div id="on">On</div>
    <div id="off">Off</div>
  </div>
</template>

<script>
</script>

<style scoped>
	#on,
	#off {
		width: 40px;
		height: 20px;
		background-color: lightgray;
		padding: 2px;
		display: inline-block;
		margin: 10px -2px;
		box-sizing: content-box;
		cursor: pointer;
		text-align: center;
	}

	#on:hover,
	#on.active {
		background-color: lightgreen;
	}

	#off:hover,
	#off.active {
		background-color: lightcoral;
	}
</style>