<script setup lang="ts"></script>

<template>
  <section class="page">
    <h1>Bienvenue sur SeenFlix</h1>

    <nav class="actions">
      <RouterLink to="/search">Rechercher un film</RouterLink>
      <RouterLink to="/login">Se connecter</RouterLink>
      <RouterLink to="/register">Créer un compte</RouterLink>
    </nav>
  </section>
</template>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
