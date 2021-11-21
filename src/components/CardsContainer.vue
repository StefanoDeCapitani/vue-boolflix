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
    selectedGenres: Array,
  },
  data() {
    return {
      focusOnCard: false,
      search: this.searchInput,
      apiUrl: "https://api.themoviedb.org/3",
      searchPaths: { movies: "/movie", series: "/tv" },
      searchModes: { search: "/search", discover: "/discover" },
      language: "",
      placeHolderImage:
        "https://www.altavod.com/assets/images/poster-placeholder.png",
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
      selectedGenresArray: [],
    };
  },
  watch: {
    searchInput: function (newInput) {
      this.search = newInput;
      this.apiSearch();
    },
    selectedGenres: function (newSelectedGenres) {
      this.selectedGenresArray = newSelectedGenres;
    },
    searchLanguage: function (newLanguage) {
      this.language = newLanguage;
      this.apiSearch("discover");
    },
  },
  computed: {
    customCards: function () {
      return this.filteredCards.map((card) => {
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
    filteredCards: function () {
      if (this.selectedGenresArray.length > 0) {
        return [...this.cards].filter(this.filterByGenre);
      } else {
        return this.cards;
      }
    },
  },
  methods: {
    filterByGenre(card) {
      let mustReturn = false;
      this.selectedGenresArray.forEach((genre) => {
        if (card.genre_ids.includes(genre)) {
          mustReturn = true;
        }
      });
      return mustReturn;
    },
    getOriginalTitleIfDifferentFromTitle(card) {
      let title = card.title || card.name;
      let originalTitle = card.original_title || card.original_name;
      return title.toLowerCase() === originalTitle.toLowerCase()
        ? ""
        : originalTitle;
    },
    getPosterCompletePath(width, path) {
      if (!path) {
        return this.placeHolderImage;
      }
      return "https://image.tmdb.org/t/p/" + width + path;
    },

    apiSearch(_mode = "search") {
      axios
        .get(
          this.apiUrl +
            this.searchModes[_mode] +
            this.searchPaths[this.searchCategory],
          {
            params: {
              api_key: this.apiKey,
              language: this.language,
              ...(_mode === "search" ? { query: this.search } : {}),
            },
          }
        )
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
  display: flex;
  flex-direction: column;
  $gap: 0.5rem;
  gap: $gap;
  .title {
    font-size: 2.5rem;
    margin: 0 1rem 1rem;
    color: white;
  }
  .cardsGrid {
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
