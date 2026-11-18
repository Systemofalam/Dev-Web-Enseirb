<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const favoritesCount = ref(0)

// TODO (9.9 / 3.9) : charger le profil et le résumé d'activité depuis l'API
// TODO (8.3) : bouton de déconnexion
</script>

<template>
  <section class="page">
    <h1>Mon profil</h1>

    <dl class="summary">
      <dt>Email</dt>
      <dd>{{ email || '—' }}</dd>

      <dt>Nombre de favoris</dt>
      <dd>{{ favoritesCount }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.summary {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.5rem 1.5rem;
}

.summary dt {
  font-weight: 600;
}

.summary dd {
  margin: 0;
}
</style>
