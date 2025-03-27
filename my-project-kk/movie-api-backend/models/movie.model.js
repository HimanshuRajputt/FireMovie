import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    movieName: { type: String, required: true },
    year: { type: String, required: true },
    genre: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: true }, // Base64 Image
  }
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
