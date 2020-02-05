<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>


						<!-- implemente a versão sem v-model -->
						<!--
              É isso que o v-model faz por trás da cena.
              Essa versão é usada para criar custom control, ver
              próximo exemplo.
            -->
            <input
							type="text"
							id="email"
							class="form-control"
						/>
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
            <p>Mail: {{ userData.email }}</p>
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
				userData: {
					email: "",
				},
			}
		}
	};
</script>

<style>
</style>
