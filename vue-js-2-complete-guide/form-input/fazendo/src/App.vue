<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>

						<!-- versão com v-model -->
            <!-- <input
							type="text"
							id="email"
							class="form-control"
							v-model="userData.email"
						/> -->

						<!-- versão sem v-model -->
						<!-- é isso que o v-model faz por trás da cena -->
            <input
							type="text"
							id="email"
							class="form-control"
							:value="userData.email"
              @input="userData.email = $event.target.value"
						/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
							type="password"
							id="password"
							class="form-control"
							v-model.lazy="userData.password"
						/>
						<p>password: {{ userData.password }}</p>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
							type="number"
							id="age"
							class="form-control"
							v-model="userData.age"
						/>
          </div>
        </div>
      </div>
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
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
						id="priority"
						class="form-control"
						v-model="selectedPriority">
            <option
							v-for="(priority, index) in priorities"
							v-bind:key="index"
							:selected="priority == 'Medium'"
						>{{ priority }}</option>
          </select>
        </div>
      </div>
			<div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<!--
						Quando tem apenas um botão no form, por padrão ele faz o submit do form.
						@click.prevent -> para previnir a ação default, que é o submit do form.
					-->
          <button
						class="btn btn-primary"
						@click.prevent="submitted"
					>Submit!</button>
        </div>
      </div>
    </form>
    <hr />

		<!-- exibe esse div quando clica no botão do form -->
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>

            <p>Message normal: {{ message }}</p>
            <p style="white-space: pre">Message com style pre: {{ message }}</p>
            <pre>Message tag pre: {{ message }}</pre>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li
								v-for="(item, index) in sendMail"
								v-bind:key="index"
							>{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import Switch from "./Switch.vue";

	export default {
		data() {
			return {
				userData: {
					email: "",
					password: "",
					age: 27
				},
				message: "A new Text",
				sendMail: [],
				gender: "Male",
				selectedPriority: "High",
				priorities: ["High", "Medium", "Low"],
				dataSwitch: true,
				isSubmitted: false
			}
		},
		methods: {
			submitted() {
				this.isSubmitted = true;
			}
		},
		components: {
			appSwitch: Switch
		}
	};
</script>

<style>
</style>
