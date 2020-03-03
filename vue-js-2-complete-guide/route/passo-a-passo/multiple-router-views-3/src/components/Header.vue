<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <router-link to="/user" tag="li" active-class="active">
      <a>User</a>
    </router-link>
    <router-link to="/cobranca" tag="li" active-class="active">
      <a>Cobranca</a>
    </router-link>
    <router-link to="/drawer" tag="li" active-class="active">
      <a>Drawer</a>
    </router-link>
    <router-link to="/product-selection" tag="li" active-class="active">
      <a>Product</a>
    </router-link>
  </ul>
</template>