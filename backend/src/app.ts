import cors from "cors";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import moviesRoutes from "./routes/movies.route.js";

export const app = express();

// Autoriser les requêtes du frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
  }),
);

// Permettre à Express de lire les données JSON
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", service: "seenflix-api" });
});

// Enregistrer les routes des films
app.use("/api/movies", moviesRoutes);

// Gérer les routes inexistantes
app.use((_req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "La ressource demandée n'existe pas.",
    },
  });
});

app.use(
  (
    error: unknown,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) => {
    console.error(error);
    response.status(500).json({
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Une erreur est survenue lors du traitement de la requête.",
      },
    });
  },
);
