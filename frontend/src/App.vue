<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app-shell">
    <header class="navbar">
      <RouterLink class="brand" to="/">SeenFlix</RouterLink>
      <nav aria-label="Navigation principale">
        <RouterLink to="/search">Recherche</RouterLink>
        <RouterLink to="/favorites">Favoris</RouterLink>
        <RouterLink to="/login">Connexion</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>Projet web SeenFlix</footer>
  </div>
</template>
