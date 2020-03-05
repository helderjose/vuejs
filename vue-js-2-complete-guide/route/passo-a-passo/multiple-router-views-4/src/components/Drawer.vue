<template>
  <div>
    <p>drawer</p>
    <!-- <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link> -->
    <!-- <router-link to="/product-selection" tag="li" active-class="active">
      <a>Product 1</a>
    </router-link> -->
    <ul>
      <router-link to="product-selection" tag="li" active-class="active">
        <a>Product 2</a>
      </router-link>
      <router-link to="/diagnostic/billing-warning" tag="li" active-class="active">
        <a>Aviso Cobança</a>
      </router-link>
    </ul>
    <div style="background-color: orange;">
      <br/>
      <router-view name="in-drawer"></router-view>
    </div>


  </div>
</template>