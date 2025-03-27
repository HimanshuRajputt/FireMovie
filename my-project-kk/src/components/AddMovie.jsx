import { useContext, useState } from "react";
import "../styles/AddMovie.css";
import FirebaseContext from "../ContextApi/FirebaseConfig";
import { useNavigate } from "react-router-dom";

export const AddMovie = () => {
  const { addData } = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      movieName: name,
      description: description,
      poster: movieImage,
      year: year,
      category: category,
      genre: genre,
    };

    addData(data);
    setName("");
    setDescription("");
    setMovieImage("")
    setYear("");
    navigate("/")
  }

  return (
    <div className="add-movie-container">
      <h1 className="form-heading">Add a New Movie</h1>
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          type="text"
          value={name}
          placeholder="Enter movie name"
          required
        />
        <input
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          value={description}
          placeholder="Description"
          required
        />
        <input
          className="form-input"
          onChange={(e) => setGenre(e.target.value)}
          type="text"
          value={genre}
          placeholder="Genre"
          required
        />
        <input
          className="form-input"
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          value={category}
          placeholder="Category"
          required
        />
        <input
          className="form-input"
          onChange={(e) => setMovieImage(e.target.value)}
          type="URL"
          value={movieImage}
          placeholder="URL"
          required
        />
        <input
          className="form-input"
          onChange={(e) => setYear(e.target.value)}
          type="text"
          value={year}
          placeholder="Release Year"
          required
        />
        <button className="form-submit" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};
