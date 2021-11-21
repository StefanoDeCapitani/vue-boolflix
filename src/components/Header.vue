<template>
  <header class="header">
    <a href="#" class="header__brand">BOOLFLIX</a>
    <input
      class="header__search-input"
      type="text"
      :value="inputValue"
      placeholder="Cerca film e serie tv..."
      @keyup.enter="$emit('input', $event.target.value)"
    />
    <select
      class="header__languange-select"
      @change="$emit('language-change', $event.target.value)"
    >
      <option
        v-for="(country, i) in countryList"
        :key="i"
        :selected="country.code === selectedLanguage.toUpperCase()"
        :value="country.code.toLowerCase()"
      >
        {{ country.code[0] + country.code[1].toLowerCase() }} :
        {{ country.flag }}
      </option>
    </select>
    <FontAwesomeIcon
      tabindex="0"
      v-if="!isFilterOpened"
      class="filter-icon"
      :icon="['fas', 'filter']"
      @click="onFilterClick()"
      @keyup.enter="onFilterClick()"
    />
    <FontAwesomeIcon
      tabindex="0"
      v-if="isFilterOpened"
      class="close-filter-icon"
      :icon="['fas', 'window-close']"
      @click="onCloseFilterClick()"
      @keyup.enter="onCloseFilterClick()"
    />
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { countries } from "country-flag-icons";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default {
  name: "Header",
  components: {
    FontAwesomeIcon,
  },
  model: {
    prop: "selectedLanguage",
    event: "language-change",
  },
  props: {
    selectedLanguage: String,
  },
  data() {
    return {
      inputValue: "",
      isFilterOpened: false,
    };
  },
  computed: {
    countryList: function () {
      return countries.map((country) => {
        return { code: country, flag: getUnicodeFlagIcon(country) };
      });
    },
  },
  methods: {
    onFilterClick() {
      this.isFilterOpened = true;
      this.$emit("open-filter");
    },
    onCloseFilterClick() {
      this.isFilterOpened = false;
      this.$emit("close-filter");
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  background-color: black;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  color: white;
  .header__brand {
    color: red;
    margin-right: auto;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    padding: 0 1rem;
  }
  .header__languange-select,
  .header__search-input {
    height: 2rem;
  }
  .header__search-input {
    width: 40ch;
    padding: 0 1rem;
  }

  .header__languange-select {
    padding-left: 0.5rem;
  }
  .close-filter-icon,
  .filter-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .close-filter-icon {
    color: red;
  }
}
</style>
