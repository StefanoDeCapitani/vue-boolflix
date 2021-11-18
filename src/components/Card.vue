<template>
  <div>
    <img :src="posterPath" alt="" />
    {{ title }} ({{ originalTitle }})
    {{ languageFlag }}
    <font-awesome-icon
      v-for="(star, i) in getStarsArray(card.vote_average)"
      :key="i"
      :icon="star"
    />
  </div>
</template>

<script>
import { hasFlag } from "country-flag-icons";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Card",
  components: {
    FontAwesomeIcon,
  },
  props: {
    posterPath: String,
    title: String,
    originalTitle: String,
    language: String,
    voteAverage: Number,
  },
  data() {
    return {
      languageFlag: this.getFlagFromCountry(this.language),
    };
  },
  methods: {
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
  },
};
</script>

<style lang="sass" scoped></style>
