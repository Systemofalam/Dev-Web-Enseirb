import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: () => import("../pages/HomePage.vue") },
    { path: "/login", name: "login", component: () => import("../pages/LoginPage.vue") },
    { path: "/register", name: "register", component: () => import("../pages/RegisterPage.vue") },
    { path: "/search", name: "search", component: () => import("../pages/SearchPage.vue") },
    { path: "/movies/:id", name: "movie-details", component: () => import("../pages/MovieDetailsPage.vue") },
    { path: "/favorites", name: "favorites", component: () => import("../pages/FavoritesPage.vue") },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

export default router;
