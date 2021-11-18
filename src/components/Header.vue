<template>
  <header class="header">
    <a href="#" class="header__brand">BOOLFLIX</a>
    <input
      class="header__search-input"
      type="text"
      :value="inputValue"
      @keyup.enter="$emit('input', $event.target.value)"
    />
  </header>
</template>

<script>
export default {
  name: "Header",
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
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.header {
  background-color: black;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  .header__brand {
    color: red;
    margin-right: auto;
    text-decoration: none;
    font-size: 2rem;
  }
  .header__search-input {
    height: 2rem;
    width: 40ch;
    padding: 0 1rem;
    &:focus {
      outline: 1px solid red;
    }
  }
}
</style>
