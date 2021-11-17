<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" />
      <form @submit.prevent="apiSearch">
        <input type="text" v-model="searchInput" />
        <button>Search</button>
      </form>
    </header>
    <main>
      <ul>
        <li v-for="(movie, i) in movies" :key="i">
          {{ movie.title }} ({{ movie.original_title }})
          {{ getFlagFromCountry(movie.original_language) }}
          {{ movie.vote_average }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import { hasFlag } from "country-flag-icons";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default {
  name: "App",
  components: {},
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3",
      apiKey: "9050243653544e50d5a8b17836489f93",
      movies: [],
      searchInput: "ciao",
    };
  },
  methods: {
    apiSearch() {
      axios
        .get(this.apiUrl + "/search/movie", {
          params: {
            api_key: this.apiKey,
            language: "it",
            query: this.searchInput,
          },
        })
        .then((resp) => {
          this.movies = [];
          this.movies.push(...resp.data.results);
        });
    },
    getCountryfromLanguage(lang) {
      if (lang === "en") return "GB";
      if (lang === "es") return "ES";

      let CountryLanguage = require("country-language");
      let countryCode = CountryLanguage.getLanguage(
        lang,
        function (err, language) {
          if (err) {
            console.log(err);
          } else {
            return language.countries
              .map((country) => country.code_2)
              .filter(
                (country) =>
                  country === lang.toUpperCase() ||
                  country.startsWith(lang.slice(0, 1).toUpperCase())
              )[0];
          }
        }
      );
      return countryCode;
    },
    getFlagFromCountry(lang) {
      let country = this.getCountryfromLanguage(lang);
      return hasFlag(country) ? getUnicodeFlagIcon(country) : "";
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
