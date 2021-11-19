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
        :overview="card.overview"
        @click.native="onCardClick(card)"
        @focus-card="focusOnCard = true"
        @blur-card="focusOnCard = false"
      ></Card>
    </div>
    <CardInfo
      v-if="focusOnCard && selectedCard.id !== 0"
      :apiKey="apiKey"
      :searchLanguage="searchLanguage"
      :id="selectedCard.id"
      :title="selectedCard.title"
      :original_title="selectedCard.original_title"
      :original_language="selectedCard.original_language"
      :vote_average="selectedCard.vote_average"
      :poster_path="selectedCard.poster_path"
      :overview="selectedCard.overview"
    />
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
import CardInfo from "./CardInfo.vue";

export default {
  name: "CardsContainer",
  components: {
    Card,
    CardInfo,
  },
  props: {
    title: String,
    searchInput: String,
    searchCategory: String,
    searchLanguage: String,
    apiKey: String,
  },
  data() {
    return {
      focusOnCard: false,
      search: this.searchInput,
      apiUrl: "https://api.themoviedb.org/3",
      searchPaths: { movies: "/search/movie", series: "/search/tv" },
      selectedCard: {
        id: 0,
        title: "",
        original_title: "",
        original_language: "",
        vote_average: 0,
        poster_path: "",
        overview: "",
      },
      cards: [],
    };
  },
  watch: {
    searchInput: function (newInput) {
      this.search = newInput;
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
          overview: card.overview,
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
      return "https://image.tmdb.org/t/p/" + width + path;
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
    onCardClick(card) {
      this.selectedCard = card;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: min(1280px, 90%);
  min-height: 500px;
  padding: 3rem 0;
  .title {
    font-size: 2.5rem;
    margin: 0 1rem 1rem;
    color: white;
  }
  .cardsGrid {
    $gap: 0.5rem;
    display: flex;
    flex-wrap: no-wrap;
    overflow: auto;
    margin-left: -$gap;
    margin-right: -$gap;
    .card {
      flex: 0 0 auto;
      width: calc(100% / 5 - $gap * 2);
      margin: $gap;
    }
  }
}
</style>
