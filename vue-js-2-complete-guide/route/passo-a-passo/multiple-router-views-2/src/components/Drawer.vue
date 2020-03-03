<template>
  <div>
    <p>drawer</p>
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <router-link to="/drawer/product-selection" tag="li" active-class="active">
      <a>Product</a>
    </router-link>
    <router-view name="in-drawer"></router-view>
  </div>
</template>