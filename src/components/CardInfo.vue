<template>
  <div class="container--card-info">
    <div
      class="card-info"
      v-show="showInfos"
      :style="{ 'background-image': `url(${this.card.posterPath})` }"
    >
      <div class="card-info__info">
        <div><span class="key">Titolo:</span> {{ card.title }}</div>
        <div v-if="card.originalTitle">
          <span class="key">Original title:</span> {{ card.originalTitle }}
        </div>
        <div>
          <span class="key">Voto: </span>
          <FiveStarRating :voteAverage="card.voteAverage" />
        </div>
        <div>
          <span class="key">Lingua: </span>
          <LanguageFlag :language="card.originalLanguage" />
        </div>
        <div v-if="card.genres.length > 0">
          <span class="key">Generi:</span>
          {{ card.genres.join(", ") }}
        </div>
        <div v-if="card.actors.length > 0">
          <span class="key">Cast:</span>
          {{ card.actors.join(", ") }}...
        </div>
      </div>
      <div class="card-info__overview">
        <div class="overview-text" v-if="card.overview">
          <div><span class="key">Overview:</span> {{ card.overview }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FiveStarRating from "./FiveStarRating.vue";
import LanguageFlag from "./LanguageFlag.vue";

export default {
  name: "CardInfo",
  components: {
    FiveStarRating,
    LanguageFlag,
  },
  props: {
    apiKey: String,
    searchLanguage: String,
    id: Number,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
    poster_path: String,
    overview: String,
  },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3/movie/",
      cardApiKey: this.apiKey,
      pendingCalls: 0,
      showInfos: false,
      card: {
        id: this.id,
        title: this.title,
        originalTitle: this.original_title,
        originalLanguage: this.original_language,
        voteAverage: this.vote_average,
        posterPath: this.poster_path,
        overview: this.overview,
        actors: [],
        genres: [],
      },
    };
  },
  methods: {
    fetchData() {
      this.pendingCalls = 2;
      axios
        .get(this.apiUrl + this.card.id + "/credits", {
          params: {
            api_key: this.apiKey,
            language: this.searchLanguage,
          },
        })
        .then((resp) => {
          this.card.actors = [];
          for (let i = 0; i < 5; i++) {
            if (resp.data.cast[i]) {
              this.card.actors.push(resp.data.cast[i].name);
            }
          }
        })
        .catch((error) => {
          console.log(error);
          this.card.actors = [];
        })
        .finally(() => {
          if (--this.pendingCalls === 0) {
            this.populateCard();
          }
        });
      axios
        .get(this.apiUrl + this.card.id, {
          params: {
            api_key: this.apiKey,
            language: this.searchLanguage,
          },
        })
        .then((resp) => {
          this.card.genres = [];
          resp.data.genres.forEach((genre) => {
            this.card.genres.push(genre.name);
          });
        })
        .catch((error) => {
          console.log(error);
          this.card.genres = [];
        })
        .finally(() => {
          if (--this.pendingCalls === 0) {
            this.populateCard();
          }
        });
    },
    populateCard() {
      this.card.title = this.title;
      this.card.originalTitle = this.original_title;
      this.card.originalLanguage = this.original_language;
      this.card.voteAverage = this.vote_average;
      this.card.posterPath = this.poster_path;
      this.card.overview = this.overview;
      this.showInfos = true;
    },
  },
  watch: {
    id: function (newId) {
      this.card.id = newId;
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.container--card-info {
  background-color: black;
  min-height: 300px;
  height: 350px;
  max-height: 400px;
  width: 100%;
  .card-info {
    $padding: 1rem;
    color: white;
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: $padding;
    height: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: right center;
    .card-info__info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: calc($padding / 2);
    }
    .card-info__overview {
      position: relative;
      z-index: 0;
      padding: calc($padding / 2);
      color: white;
      .overview-text {
        position: absolute;
        left: calc($padding / 2);
        bottom: calc($padding + $padding / 2);
        max-height: 40%;
        width: 65%;
        overflow: auto;
      }
      &::after {
        content: "";
        position: absolute;
        inset: -$padding;
        background-image: linear-gradient(
          90deg,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 80%
        );
        z-index: -1;
      }
    }
    .key {
      font-weight: bold;
    }
  }
}
</style>
