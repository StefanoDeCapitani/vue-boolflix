<template>
  <div id="app">
    <Header
      v-model="searchLanguage"
      @input="onInput"
      @open-filter="isFilterOpened = true"
      @close-filter="isFilterOpened = false"
    />
    <Main
      :searchInput="searchInput"
      :searchLanguage="searchLanguage"
      :filterOpened="isFilterOpened"
    ></Main>
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
      searchLanguage: "",
      isFilterOpened: false,
    };
  },
  mounted() {
    this.searchLanguage = navigator.language.split("-")[0];
  },
  methods: {
    onInput(value) {
      this.searchInput = value;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background-color: rgb(54, 54, 54);
}
</style>
