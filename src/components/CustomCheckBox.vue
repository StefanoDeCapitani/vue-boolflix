<template>
  <div
    class="customCheckBox"
    :class="{ active: isChecked }"
    @click="onClick"
    @keyup.enter="onClick"
  >
    <FontAwesomeIcon :icon="['far', 'square']" v-if="!isChecked" />
    <FontAwesomeIcon :icon="['far', 'check-square']" v-if="isChecked" />
    <div class="label">{{ genre.name }}</div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CustomCheckBox",
  components: {
    FontAwesomeIcon,
  },
  props: {
    genre: Object,
  },
  data() {
    return {
      isChecked: false,
    };
  },
  computed: {
    genreAndStatus: function () {
      return {
        id: this.genre.id,
        isChecked: this.isChecked,
      };
    },
  },
  methods: {
    onClick() {
      this.isChecked = !this.isChecked;
      this.$emit("click-genre", this.genreAndStatus);
    },
  },
};
</script>

<style lang="scss" scoped>
.customCheckBox {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  gap: 1rem;
  &.active {
    background-color: red;
  }
}
</style>
