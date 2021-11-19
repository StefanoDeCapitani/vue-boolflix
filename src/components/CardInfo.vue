<template>
  <div>{{ card.title }} {{ card.vote_average }} {{ actors }} {{ genres }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "CardInfo",
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
      card: {
        id: this.id,
        title: this.title,
        original_title: this.original_title,
        original_language: this.original_language,
        vote_average: this.vote_average,
        poster_path: this.poster_path,
        overview: this.overview,
      },
      actors: [],
      genres: [],
    };
  },
  mounted() {
    this.apiCall();
  },
  methods: {
    apiCall() {
      axios
        .get(this.apiUrl + this.card.id + "/credits", {
          params: {
            api_key: this.apiKey,
            language: this.searchLanguage,
          },
        })
        .then((resp) => {
          this.actors = [];
          for (let i = 0; i < 5; i++) {
            if (resp.data.cast[i]) {
              console.log("Actor: " + resp.data.cast[i].name);
              this.actors.push(resp.data.cast[i].name);
            }
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
          this.genres = [];
          resp.data.genres.forEach((genre) => {
            console.log(genre.name);
            this.genres.push("genre: " + genre.name);
          });
        });
    },
  },
  watch: {
    id: function () {
      this.card = {
        id: this.id,
        title: this.title,
        original_title: this.original_title,
        original_language: this.original_language,
        vote_average: this.vote_average,
        poster_path: this.poster_path,
        overview: this.overview,
      };
      this.apiCall();
    },
  },
};
</script>

<style lang="scss" scoped></style>
