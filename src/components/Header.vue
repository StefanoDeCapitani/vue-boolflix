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
    <FontAwesomeIcon
      v-if="!isFilterOpened"
      class="filter-icon"
      :icon="['fas', 'filter']"
      @click="onFilterClick()"
    />
    <FontAwesomeIcon
      v-if="isFilterOpened"
      class="close-filter-icon"
      :icon="['fas', 'window-close']"
      @click="onCloseFilterClick()"
    />
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Header",
  components: {
    FontAwesomeIcon,
  },
  model: {
    prop: "inputValue",
    event: "input",
  },
  prop: {
    inputValue: String,
  },
  data() {
    return {
      inputValue: "",
      isFilterOpened: false,
    };
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
  }
  .header__search-input {
    height: 2rem;
    width: 40ch;
    padding: 0 1rem;
    &:focus {
      outline: 1px solid red;
    }
  }
  .close-filter-icon,
  .filter-icon {
    font-size: 1.5rem;
  }
  .close-filter-icon {
    color: red;
  }
}
</style>
