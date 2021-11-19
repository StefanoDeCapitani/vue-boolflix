<template>
  <div class="filter-container">
    <CustomCheckBox
      v-for="genre in genres"
      :key="genre.id"
      :genre="genre"
      @click-genre="onClickGenre"
    />
  </div>
</template>

<script>
import CustomCheckBox from "./CustomCheckBox.vue";

export default {
  name: "CardsFilter",
  components: {
    CustomCheckBox,
  },
  props: {
    genres: Array,
  },
  methods: {
    onClickGenre(genre) {
      this.$emit("click-genre", genre);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-container {
  align-self: start;
  margin-top: 1rem;
  padding: 1rem;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>
