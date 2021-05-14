<template>
  <div class="app">
  <template v-if="currentUser">
    <header>
      <div class="app-bar">
        <div class="app-header">
          <h1>🌱 gardeningApp</h1>
        </div>
        
        <div class="app-menu">
          <router-link to="/products" class="item">Products</router-link>
          <router-link to="/orders" class="item" v-if="currentUser.profile.usertype == 'Seller'||'admin'">Orders</router-link>
          <router-link to="/cart" class="item" v-if="currentUser.profile.usertype == 'Buyer'||'admin'">Cart</router-link>
          <router-link to="/profile" class="item">Profile</router-link>
        </div>
        <div class="login">
          <div class="item">
          <div class="user" v-on:click="logout"> {{currentUser.username}} 🔒</div> 
          </div>
        </div>
      </div>
    </header>
    <div>
      <router-view></router-view>
    </div>
    </template>
    <template v-else>
      <LoginForm />
    </template>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
export default {
  components: {
    LoginForm
  },
  methods:{
    logout() {
            Meteor.logout();
          }
  },
  meteor: {
    currentUser() {
    return Meteor.user();
}
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
