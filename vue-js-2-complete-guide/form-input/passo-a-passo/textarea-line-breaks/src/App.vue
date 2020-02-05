<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
						id="message" rows="5" class="form-control"
						v-model="message"
					></textarea>
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

            <div style="background-color: orange;">
              <p>Message normal: {{ message }}</p>
            </div>

            <div style="background-color: bisque;">
              <!-- quebra de linha com css -->
              <p style="white-space: pre">Message com style pre: {{ message }}</p>
            </div>

            <div style="background-color: darkgray;">
              <pre>Message tag pre: {{ message }}</pre>
            </div>
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
				message: "A new Text"
			}
		}
	};
</script>

<style>
</style>
