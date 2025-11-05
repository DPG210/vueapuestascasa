<template>
  <MenuApuestas></MenuApuestas>
  <router-view></router-view>
</template>

<script>
import MenuApuestas from './components/MenuApuestas.vue'


export default {
  name: 'App',
  components: {
    MenuApuestas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
