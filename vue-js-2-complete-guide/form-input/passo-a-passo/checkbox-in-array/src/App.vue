<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
								type="checkbox"
								id="sendmail"
								value="SendMail"
								v-model="sendMail"
							/> Send Mail
            </label>
            <label for="sendInfomail">
              <input
								type="checkbox"
								id="sendInfomail"
								value="SendInfoMail"
								v-model="sendMail"
							/> Send Infomail
            </label>
          </div>
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
            <ul>
              <li
								v-for="(item, index) in sendMail"
								v-bind:key="index"
							>{{ item }}</li>
            </ul>
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
				sendMail: []
			}
		}
	};
</script>

<style>
</style>
