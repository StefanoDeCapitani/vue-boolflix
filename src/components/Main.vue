<template>
  <main>
    <CardsContainer
      :searchInput="search"
      searchCategory="movies"
      searchLanguage="it"
    />
    <CardsContainer
      :searchInput="search"
      searchCategory="series"
      searchLanguage="it"
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

<style lang="scss" scoped></style>
