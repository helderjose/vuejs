<template>
  <div style="border: solid 1px #000;">
    <h3>Header.vue</h3>
    <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>

    <!-- passe o id 1 -->
    <router-link tag="li" active-class="active">
      <a>User 1</a>
    </router-link>

    <!-- passe o id 2 -->
    <router-link tag="li" active-class="active">
      <a>User 2</a>
    </router-link>
  </ul>
  </div>
</template>