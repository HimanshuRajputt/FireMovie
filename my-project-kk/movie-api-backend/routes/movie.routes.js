import express from "express";
import {
  getMovies,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/", getMovies); // Get all movies
router.post("/", addMovie); // Add new movie
router.get("/:id", getMovieById); // Get a movie by ID
router.put("/:id", updateMovie); // Update a movie
router.delete("/:id", deleteMovie); // Delete a movie

export default router;
