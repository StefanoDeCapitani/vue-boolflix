<template>
  <main class="main" :class="{ 'show-filter': isFilterOpened }">
    <div class="sections">
      <CardsContainer
        :apiKey="apiKey"
        :searchInput="search"
        :searchLanguage="searchLanguage"
        :selectedGenres="selectedGenres"
        searchCategory="movies"
        title="Film"
      />
      <CardsContainer
        :apiKey="apiKey"
        :searchInput="search"
        :searchLanguage="searchLanguage"
        :selectedGenres="selectedGenres"
        searchCategory="series"
        title="Serie TV"
      />
    </div>
    <CardsFilter
      v-if="isFilterOpened"
      :genres="genres"
      @click-genre="onClickGenre"
    />
  </main>
</template>

<script>
import axios from "axios";
import CardsContainer from "./CardsContainer.vue";
import CardsFilter from "./CardsFilter.vue";

export default {
  name: "Main",
  components: {
    CardsContainer,
    CardsFilter,
  },
  props: {
    searchInput: String,
    searchLanguage: String,
    filterOpened: Boolean,
  },
  watch: {
    searchInput: function () {
      this.search = this.searchInput;
    },
    filterOpened: function (isOpened) {
      this.isFilterOpened = isOpened;
      if (!isOpened) {
        this.selectedGenres = [];
      }
    },
  },
  data() {
    return {
      search: this.searchInput,
      apiKey: "9050243653544e50d5a8b17836489f93",
      isFilterOpened: false,
      genres: [],
      selectedGenres: [],
    };
  },
  mounted() {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        params: {
          api_key: this.apiKey,
          language: this.searchLanguage,
        },
      })
      .then((resp) => {
        this.genres.push(...resp.data.genres);
      });
  },
  methods: {
    onClickGenre(genre) {
      if (genre.isChecked) {
        this.selectedGenres.push(genre.id);
      } else {
        if (this.selectedGenres.length > 0) {
          this.selectedGenres.splice(this.selectedGenres.indexOf(genre.id), 1);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  &.show-filter {
    display: grid;
    grid-template-columns: 8fr 2fr;
  }
  .sections {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
