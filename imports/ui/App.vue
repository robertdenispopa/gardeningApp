<template>
  <div class="app">
    <header>
      <div class="app-bar">
        <div class="app-header">
          <h1>🌱 gardeningApp</h1>
        </div>
        <div class="app-menu">
          <router-link to="/products" class="item">Products</router-link>
          <router-link to="/orders" class="item">Orders</router-link>
          <router-link to="/cart" class="item">Cart</router-link>
          <router-link to="/profile" class="item">Profile</router-link>
        </div>
        <div class="login">
          <p class="item">Account</p>
        </div>
      </div>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
