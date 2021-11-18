<template>
  <main class="main">
    <CardsContainer
      :searchInput="search"
      searchCategory="movies"
      searchLanguage="it"
      title="Film"
    />
    <hr />
    <CardsContainer
      :searchInput="search"
      searchCategory="series"
      searchLanguage="it"
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
  },
  watch: {
    searchInput: function () {
      this.search = this.searchInput;
    },
  },
  data() {
    return { search: this.searchInput };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(100, 100, 100);
}
</style>
