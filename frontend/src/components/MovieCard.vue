<script setup lang="ts">
defineProps<{
  movie: {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
  };
}>();
</script>

<template>
  <div class="movie-card">
    <img
      v-if="movie.poster_path"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title"
    />

    <h3>{{ movie.title }}</h3>

    <p>⭐ {{ movie.vote_average.toFixed(1) }}/10</p>
  </div>
</template>

<style scoped>
.movie-card {
  width: 200px;
}

.movie-card img {
  width: 100%;
  border-radius: 8px;
}
</style>
