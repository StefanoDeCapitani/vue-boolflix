<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" />
      <form
        @submit.prevent="
          apiSearch(moviesPath, 'it', 'movies');
          apiSearch(seriesPath, 'it', 'series');
        "
      >
        <input type="text" v-model="searchInput" />
        <button>Search</button>
      </form>
    </header>
    <main>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          {{ movie.title }} ({{ movie.original_title }})
          {{ getFlagFromCountry(movie.original_language) }}
          <font-awesome-icon
            v-for="(star, i) in getStarsArray(movie.vote_average)"
            :key="i"
            :icon="star"
          />
          <img :src="getPosterCompletePath('w342', movie.poster_path)" alt="" />
        </li>
      </ul>
      <hr />
      <ul>
        <li v-for="serie in series" :key="serie.id">
          {{ serie.name }} ({{ serie.original_name }})
          {{ getFlagFromCountry(serie.original_language) }}
          <font-awesome-icon
            v-for="(star, i) in getStarsArray(serie.vote_average)"
            :key="i"
            :icon="star"
          />
          <img :src="getPosterCompletePath('w342', serie.poster_path)" alt="" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import { hasFlag } from "country-flag-icons";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3",
      apiKey: "9050243653544e50d5a8b17836489f93",
      moviesPath: "/search/movie",
      movies: [],
      seriesPath: "/search/tv",
      series: [],
      imagePath: "https://image.tmdb.org/t/p/",
      searchInput: "ciao",
    };
  },
  methods: {
    apiSearch(path, lang, dataKey) {
      axios
        .get(this.apiUrl + path, {
          params: {
            api_key: this.apiKey,
            language: lang,
            query: this.searchInput,
          },
        })
        .then((resp) => {
          this[dataKey] = [];
          this[dataKey].push(...resp.data.results);
        });
    },
    getCountryfromLanguage(lang) {
      if (lang === "en") return "GB";
      if (lang === "es") return "ES";
      if (lang === "el") return "GR";

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
    getStarsArray(vote_average) {
      let stars = Math.ceil(vote_average / 2);
      let iconsArray = [];
      for (let i = 0; i < 5; i++) {
        iconsArray.push(i < stars ? ["fas", "star"] : ["far", "star"]);
      }
      return iconsArray;
    },
    getPosterCompletePath(width, path) {
      if (!path) {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
      }
      return this.imagePath + width + "/" + path;
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
