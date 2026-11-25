import { z } from "zod";

// Schéma de validation des paramètres de recherche
export const searchMoviesSchema = z.object({
  q: z.string().trim().min(1, "La recherche ne peut pas être vide.")
});

// Schéma des informations communes aux films et aux séries
const baseMovieSchema = z.object({
  id: z.number().int().positive(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
  overview: z.string()
});

// Schéma de validation d'un film TMDB
const tmdbMovieSchema = baseMovieSchema.extend({
  media_type: z.literal("movie"),
  title: z.string()
});

// Schéma de validation d'une série TMDB
const tmdbTvSchema = baseMovieSchema.extend({
  media_type: z.literal("tv"),
  name: z.string()
});

// Schéma de validation d'une personne TMDB
const tmdbPersonSchema = z.object({
  media_type: z.literal("person")
});

// Schéma des différents types de résultats TMDB
const tmdbItemSchema = z.discriminatedUnion("media_type", [
  tmdbMovieSchema,
  tmdbTvSchema,
  tmdbPersonSchema
]);

// Schéma de validation de la réponse complète de TMDB
export const tmdbSearchResponseSchema = z.object({
  page: z.number().int().positive(),
  results: z.array(tmdbItemSchema),
  total_pages: z.number().int().nonnegative(),
  total_results: z.number().int().nonnegative()
});