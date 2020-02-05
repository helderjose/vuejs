<template>
  <div style="border: solid 1px #000">
    <h3>Header.vue</h3>
    <ul class="nav nav-pills">
      <!--
        active-class="active" -> aplica o css no item selecionado.
        exact -> para aplicar o css quando a url for exatamente igual ao "to"
      -->
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Home</a>
      </router-link>
      <router-link to="/user" tag="li" active-class="active">
        <a>User</a>
      </router-link>
    </ul>
  </div>
</template>