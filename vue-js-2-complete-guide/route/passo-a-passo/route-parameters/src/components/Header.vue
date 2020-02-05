<template>
  <div style="border: solid 1px #000;">
    <h3>Header.vue</h3>
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Home</a>
      </router-link>

      <!-- 10 é o parâmetro -->
      <router-link to="/user/10" tag="li" active-class="active">
        <a>User</a>
      </router-link>
    </ul>
  </div>
</template>