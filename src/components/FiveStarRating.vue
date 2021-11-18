<template>
  <span>
    <font-awesome-icon
      v-for="(star, i) in getStarsArray()"
      :key="i"
      :icon="star"
    />
  </span>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "FiveStarsRating",
  components: {
    FontAwesomeIcon,
  },
  props: {
    voteAverage: Number,
  },
  methods: {
    getStarsArray() {
      let stars = Math.ceil(this.voteAverage / 2);
      let iconsArray = [];
      for (let i = 0; i < 5; i++) {
        iconsArray.push(i < stars ? ["fas", "star"] : ["far", "star"]);
      }
      return iconsArray;
    },
  },
};
</script>

<style></style>
