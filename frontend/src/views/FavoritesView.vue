<script setup lang="ts">
import { ref } from 'vue'

type Favorite = {
  id: string
  tmdbId: number
  type: 'movie' | 'tv'
  title: string
  rating?: number
}

const favorites = ref<Favorite[]>([])

// TODO (8.7 / 9.8) : charger, trier et filtrer les favoris depuis le store
// TODO (8.7) : supprimer un favori (DELETE /me/favorites/:id)
function removeFavorite(_id: string) {}
</script>

<template>
  <section class="page">
    <h1>Mes favoris</h1>

    <p v-if="favorites.length === 0" class="empty">Tu n'as encore aucun favori.</p>

    <ul v-else class="favorites">
      <li v-for="favorite in favorites" :key="favorite.id">
        <RouterLink :to="`/${favorite.type}/${favorite.tmdbId}`">{{ favorite.title }}</RouterLink>
        <button type="button" @click="removeFavorite(favorite.id)">Retirer</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.favorites {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.favorites li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
</style>
