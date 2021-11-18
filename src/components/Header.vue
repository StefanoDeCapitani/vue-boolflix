<template>
  <header>
    <img alt="Boolflix logo" src="@/assets/logo.png" />
    <input
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

<style scoped lang="scss"></style>
