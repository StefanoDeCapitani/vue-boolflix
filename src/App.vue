<template>
  <div id="app">
    <Header v-model="searchInput" />
    <Main :searchInput="searchInput"></Main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      searchInput: "",
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
