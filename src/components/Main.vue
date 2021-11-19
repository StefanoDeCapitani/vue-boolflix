<template>
  <main class="main">
    <CardsContainer
      :apiKey="apiKey"
      :searchInput="search"
      :searchLanguage="searchLanguage"
      searchCategory="movies"
      title="Film"
    />
    <CardsContainer
      :apiKey="apiKey"
      :searchInput="search"
      :searchLanguage="searchLanguage"
      searchCategory="series"
      title="Serie TV"
    />
  </main>
</template>

<script>
import CardsContainer from "./CardsContainer.vue";

export default {
  name: "Main",
  components: {
    CardsContainer,
  },
  props: {
    searchInput: String,
    searchLanguage: String,
  },
  watch: {
    searchInput: function () {
      this.search = this.searchInput;
    },
  },
  data() {
    return {
      search: this.searchInput,
      apiKey: "9050243653544e50d5a8b17836489f93",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
