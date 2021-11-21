<template>
  <main class="main" :class="{ 'show-filter': isFilterOpened }">
    <CardsFilter
      class="filter"
      v-if="isFilterOpened"
      :genres="genres"
      @click-genre="onClickGenre"
    />
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
    this.getGenresFromApi();
  },
  methods: {
    getGenresFromApi() {
      let pendingCalls = 2;
      for (let type of ["tv", "movie"]) {
        axios
          .get(`https://api.themoviedb.org/3/genre/${type}/list`, {
            params: {
              api_key: this.apiKey,
              language: this.searchLanguage,
            },
          })
          .then((resp) => {
            let newGenres = [...resp.data.genres];
            this.addToGenres(newGenres);
          })
          .finally(() => {
            if (--pendingCalls === 0) {
              this.genres.sort((a, b) => a.name.localeCompare(b.name));
            }
          });
      }
    },
    addToGenres(newGenres) {
      this.genres =
        this.genres.length === 0
          ? this.genres.concat(newGenres)
          : this.getNonDuplicateGenres(this.genres.concat(newGenres));
    },
    getNonDuplicateGenres(genres) {
      return genres.reduce((acc, el) => {
        return acc.map((gen) => gen.id).includes(el.id) ? acc : acc.concat(el);
      }, []);
    },

    onClickGenre(genre) {
      if (genre.isChecked) {
        this.addSelectedGenre(genre.id);
      } else {
        if (this.selectedGenres.length > 0) {
          this.removeSelectedGenre(genre.id);
        }
      }
    },
    addSelectedGenre(genreId) {
      this.selectedGenres.push(genreId);
    },
    removeSelectedGenre(genreId) {
      let genreToBeRemovedIndex = this.selectedGenres.indexOf(genreId);
      this.selectedGenres.splice(genreToBeRemovedIndex, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  &.show-filter {
    display: grid;
    grid-template-columns: 8fr 2fr;
    grid-template-areas: "cards genre-filter";
  }
  .sections {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: cards;
    padding-bottom: 2rem;
  }
  .filter {
    grid-area: genre-filter;
  }
}
</style>
