<template>
  <div id="app">
    <StudiesPage />
  </div>
</template>

<script>
import StudiesPage from "./components/StudiesPage.vue";

export default {
  name: "app",
  components: {
    StudiesPage,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  background: linear-gradient(#236189, #79addd);
  height: 100vh;
}
</style>
