<template>
  <div class="card">
    <img :src="posterPath" alt="" />
    <div class="card__info">
      <p><span class="key">Titolo: </span>{{ title }}</p>
      <p v-if="originalTitle">
        <span class="key">Titolo originale: </span> {{ originalTitle }}
      </p>
      <p>
        <span class="key">Lingua: </span><LanguageFlag :language="language" />
      </p>
      <p>
        <span class="key">Voto: </span
        ><FiveStarsRating :voteAverage="voteAverage" />
      </p>
    </div>
  </div>
</template>

<script>
import FiveStarsRating from "./FiveStarRating.vue";
import LanguageFlag from "./LanguageFlag.vue";

export default {
  name: "Card",
  components: {
    FiveStarsRating,
    LanguageFlag,
  },
  props: {
    posterPath: String,
    title: String,
    originalTitle: String,
    language: String,
    voteAverage: Number,
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card__info {
    position: absolute;
    inset: 0;
    padding: 1.5rem 2rem;
    background-color: black;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    line-height: 1.5rem;
    .key {
      font-weight: bold;
    }
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    .card__info {
      opacity: 1;
    }
  }
}
</style>
