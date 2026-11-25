
import type { NextFunction, Request, Response } from "express";
import { getMovies } from "../services/movies.service.js";

export async function getMoviesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const movies = await getMovies();

    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
}
