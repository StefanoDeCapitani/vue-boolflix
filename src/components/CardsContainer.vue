<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <div class="cardsGrid">
      <Card
        v-for="card in customCards"
        :key="card.id"
        :posterPath="card.poster_path"
        :title="card.title"
        :originalTitle="card.original_title"
        :language="card.original_language"
        :voteAverage="card.vote_average"
      ></Card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";

export default {
  name: "CardsContainer",
  components: {
    Card,
  },
  props: {
    title: String,
    searchInput: String,
    searchCategory: String,
    searchLanguage: String,
  },
  data() {
    return {
      search: this.searchInput,
      apiUrl: "https://api.themoviedb.org/3",
      apiKey: "9050243653544e50d5a8b17836489f93",
      searchPaths: { movies: "/search/movie", series: "/search/tv" },
      cards: [],
    };
  },
  watch: {
    searchInput: function () {
      this.search = this.searchInput;
      this.apiSearch();
    },
  },
  computed: {
    customCards: function () {
      return this.cards.map((card) => {
        return {
          id: card.id,
          title: card.title || card.name,
          original_title: this.getOriginalTitleIfDifferentFromTitle(card),
          original_language: card.original_language,
          vote_average: card.vote_average,
          poster_path: this.getPosterCompletePath("w342", card.poster_path),
        };
      });
    },
  },
  methods: {
    getOriginalTitleIfDifferentFromTitle(card) {
      let title = card.title || card.name;
      let originalTitle = card.original_title || card.original_name;
      return title.toLowerCase() === originalTitle.toLowerCase()
        ? ""
        : originalTitle;
    },
    getPosterCompletePath(width, path) {
      if (!path) {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
      }
      return "https://image.tmdb.org/t/p/" + width + "/" + path;
    },
    apiSearch() {
      axios
        .get(this.apiUrl + this.searchPaths[this.searchCategory], {
          params: {
            api_key: this.apiKey,
            language: this.searchLanguage,
            query: this.search,
          },
        })
        .then((resp) => {
          this.cards = [];
          this.cards.push(...resp.data.results);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1280px;
  padding: 3rem 0;
  .title {
    font-size: 2.5rem;
    margin: 0 1rem 1rem;
  }
  .cardsGrid {
    $gap: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin-left: -$gap;
    margin-right: -$gap;
    .card {
      width: calc(100% / 5 - $gap * 2);
      margin: $gap;
    }
  }
}
</style>
