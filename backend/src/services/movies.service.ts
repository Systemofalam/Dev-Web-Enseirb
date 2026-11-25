
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function getMovies() {
  const token = process.env.TMDB_API_KEY;

  if (!token) {
    throw new Error("La variable d'environnement TMDB_API_KEY est manquante.");
  }

  const response = await fetch(`${TMDB_BASE_URL}/movie/popular?language=fr-FR`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }
  return response.json();
}
