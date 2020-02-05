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

            <!-- não precisa fazer nada -->
            <div style="background-color: orange;">
              <p>Message normal: {{ message }}</p>
            </div>

            <div style="background-color: bisque;">
              <!-- exiba message aqui com  quebra de linha usando css -->
              <p style=" coloque o css aqui ">Message com style pre: {{ message }}</p>
            </div>

            <div style="background-color: darkgray;">
              <!-- exiba message com quebra de linha aqui usando apenas html -->
              Message tag pre: {{ message }}
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
