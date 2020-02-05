<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
						id="priority"
						class="form-control"
						v-model="selectedPriority">
            <!-- :selected="priority == 'Medium'" -> só funciona se não tiver o v-model porque o v-model sobrescreve, use
            o v-model para setar o valor padrão  -->
            <option
							v-for="(priority, index) in priorities"
							v-bind:key="index"
							:selected="priority == 'Medium'"
						>{{ priority }}</option>
          </select>
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
            <p>Priority: {{ selectedPriority }}</p>
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
				selectedPriority: "High", // usado no v-model para setar o valor padrão
				priorities: ["High", "Medium", "Low"]
			}
		}
	};
</script>

<style>
</style>
