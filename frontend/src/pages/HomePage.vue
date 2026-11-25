<script setup lang="ts">
import { onMounted, ref } from "vue";
import MovieCard from "../components/MovieCard.vue";
import { getMovies } from "../services/movies.service";

  // Structure d'un film
interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
}

  // Variables réactives
const movies = ref<Movie[]>([]);
const loading = ref(true);
const error = ref("");

  // Récupération des films au chargement de la page
onMounted(async () => {
  try {
    const data = await getMovies();
    movies.value = data.results;
  } catch (err) {
    error.value = "Impossible de récupérer les films.";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <!-- Section d'accueil  -->
  <section class="hero">
    <p class="eyebrow">Votre cinéma, au même endroit</p>
    <h1>Films et séries à découvrir.</h1>
    <p class="lead">
      SeenFlix vous permettra de rechercher des œuvres et de conserver vos coups de cœur.
    </p>
    <div class="actions">
      <RouterLink class="button primary" to="/search">
        Commencer la recherche
      </RouterLink>
      <RouterLink class="button secondary" to="/register">
        Créer un compte
      </RouterLink>
    </div>
  </section>

  <!-- films populaires -->
  <section class="movies-section">
    <h2>Films populaires</h2>

    <p v-if="loading">Chargement des films...</p>

    <p v-else-if="error">{{ error }}</p>

    <div v-else class="movies-grid">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </section>
</template>

<style scoped>
.movies-section {
  margin-top: 40px;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>
