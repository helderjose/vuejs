<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
							type="radio"
							id="male"
							value="Male"
							v-model="gender"
						/> Male
          </label>
          <label for="female">
            <input
							type="radio"
							id="female"
							value="Female"
							v-model="gender"
						/> Female
          </label>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Gender: {{ gender }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				gender: "Female"
			}
		}
	};
</script>

<style>
</style>
