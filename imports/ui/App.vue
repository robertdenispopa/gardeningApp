<template>
  <div class="app">
    <header>
      <div class="app-bar">
        <div class="app-header">
          <h1>🌱 gardeningApp</h1>
        </div>
        <div class="app-menu">
          <p class="item"> Products </p>
          <p class="item"> Orders </p>
          <p class="item"> Profile </p>
        </div>
        <div class="login">
          <p class="item">Account</p>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Info from './components/Info.vue'

export default {
  components: {
    Hello,
    Info,
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
