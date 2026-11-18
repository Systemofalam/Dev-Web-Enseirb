<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
const results = ref<Array<{ tmdbId: number; type: 'movie' | 'tv'; title: string }>>([])

// TODO (8.2 / 5.2) : appeler GET /movies/search?q=…
function handleSearch() {
  console.log(query.value);
  
}

// TODO (8.7) : ajouter aux favoris, visible uniquement si l'utilisateur est connecté
function addToFavorites(_tmdbId: number, _type: 'movie' | 'tv') {}
</script>

<template>
  <section class="page">
    <h1>Rechercher</h1>

    <form class="search-form" role="search" @submit.prevent="handleSearch">
      <input v-model="query" type="search" placeholder="Titre d'un film ou d'une série" />
      <button type="submit">Rechercher</button>
    </form>

    <p v-if="results.length === 0" class="empty">Aucun résultat pour le moment.</p>

    <ul v-else class="results">
      <li v-for="item in results" :key="`${item.type}-${item.tmdbId}`">
        <RouterLink :to="`/${item.type}/${item.tmdbId}`">{{ item.title }}</RouterLink>
        <button type="button" @click="addToFavorites(item.tmdbId, item.type)">
          Ajouter aux favoris
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.search-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.search-form input {
  flex: 1;
}

.results {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.results li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
</style>
