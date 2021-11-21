<template>
  <span>{{ languageFlag }}</span>
</template>

<script>
import { hasFlag } from "country-flag-icons";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default {
  name: "LanguageFlag",
  props: {
    language: String,
  },
  computed: {
    languageFlag: function () {
      let country = this.getCountryfromLanguage();
      return hasFlag(country) ? getUnicodeFlagIcon(country) : "";
    },
  },
  methods: {
    getCountryfromLanguage() {
      if (this.language === "en") return "GB";
      if (this.language === "es") return "ES";
      if (this.language === "el") return "GR";
      if (this.language === "zh") return "CN";
      if (this.language === "hi") return "IN";
      if (this.language === "fa") return "AF";
      if (this.language === "ar") return "AE";

      let CountryLanguage = require("country-language");
      let countryCode = CountryLanguage.getLanguage(
        this.language,
        (err, language) => {
          if (err) {
            console.log(err);
          } else {
            return language.countries
              .map((country) => country.code_2)
              .filter(
                (country) =>
                  country === this.language.toUpperCase() ||
                  country.startsWith(this.language.slice(0, 1).toUpperCase())
              )[0];
          }
        }
      );
      return countryCode;
    },
  },
};
</script>

<style></style>
