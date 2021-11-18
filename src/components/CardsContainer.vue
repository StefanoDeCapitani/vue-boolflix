<template>
  <div class="container">
    <Card
      v-for="card in customCards"
      :key="card.id"
      :posterPath="card.poster_path"
      :title="card.title"
      :originalTitle="card.original_title"
      :language="card.original_language"
      :voteAverage="card.vote_average"
    />
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
    searchInput: String,
    searchCategory: String,
    searchLanguage: String,
  },
  watch: {
    searchInput: function () {
      this.search = this.searchInput;
      this.apiSearch();
    },
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
  computed: {
    customCards: function () {
      return this.cards.map((card) => {
        console.log("hei");
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
      return title === originalTitle ? "" : originalTitle;
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
          console.log(resp);
          this.cards = [];
          this.cards.push(...resp.data.results);
        });
    },
  },
};
</script>

<style lang="sss" scoped></style>
