import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../ContextApi/FirebaseConfig";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../styles/Movies.css";
// import Carousel from "./Carousel";
import Slideshow from "./Slideshow";

export const Movies = () => {
  const { data, deleteData, editMovie, editingMovie, setEditingMovie } =
    useContext(FirebaseContext);

  // States for filtering
  const [filteredData, setFilteredData] = useState([]);
  const [editedFields, setEditedFields] = useState({});
  const [selectedGenre, setSelectedGenre] = useState(""); // For genre filter
  const [selectedCategory, setSelectedCategory] = useState(""); // For Hollywood/Bollywood filter
  const [searchQuery, setSearchQuery] = useState(""); // For movie name search



  // const carouselData = [
  //   {
  //     name: "Action Blockbuster",
  //     genre: "Action",
  //     category: "Hollywood",
  //     image: "https://placehold.co/400x400",
  //   },
  //   {
  //     name: "Romantic Comedy",
  //     genre: "Comedy",
  //     category: "Bollywood",
  //     image: "https://placehold.co/400",
  //   },
  //   {
  //     name: "Thrilling Mystery",
  //     genre: "Thriller",
  //     category: "Hollywood",
  //     image: "https://placehold.co/400",
  //   },
  //   {
  //     name: "Drama Saga",
  //     genre: "Drama",
  //     category: "Bollywood",
  //     image: "https://placehold.co/400",
  //   },
  // ];
  // Initialize `filteredData` with full data on component mount
  useEffect(() => {
    setFilteredData(data);
    // console.log(data)
  }, [data]);

  // Handle all filters
  useEffect(() => {
    let filtered = data;

    if (selectedGenre) {
      filtered = filtered.filter(
        (movie) => movie.genre?.toLowerCase() === selectedGenre.toLowerCase()
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (movie) =>
          movie.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((movie) =>
        movie.movieName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [selectedGenre, selectedCategory, searchQuery, data]);

  const handleFilter = (letter) => {
    if (letter) {
      const filtered = data.filter((movie) =>
        movie.movieName.toLowerCase().startsWith(letter.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Reset to all movies
    }
  };

  const handleEditStart = (movie) => {
    setEditingMovie(movie._id);
    setEditedFields(movie);
  };

  const handleInputChange = (field, value) => {
    setEditedFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    editMovie(editingMovie, [editedFields]);
    setEditingMovie(null);
    setEditedFields({});
  };

  return (
    <>
      <div className="movies-container">
        <h1 className="movies-heading">Movies Collection</h1>
        <div className="All-filter-container">
          {/* Search Movie by Name */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search by movie name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Genre and Category Filters */}
          <div className="filter-container">
            <select
              className="genre-filter"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Thriller">Thriller</option>
            </select>
            <select
              className="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Hollywood">Hollywood</option>
              <option value="Bollywood">Bollywood</option>
            </select>
          </div>
        </div>
        {/* Alphabetical Filter */}
        <div className="Filter-Aplpha">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
            <button
              className="Filter-Aplpha-button"
              key={letter}
              onClick={() => handleFilter(letter)}
            >
              {letter}
            </button>
          ))}
          <button
            className="Filter-Aplpha-button"
            onClick={() => handleFilter(null)}
          >
            Show All
          </button>
        </div>
        {/* <Carousel carouselData={carouselData} />{" "} */}

          {filteredData.length > 0? <Slideshow data={data}/>:""}
            {/* <Slideshow data={data} /> */}
        {/* Use the Carousel component */}
        {/* Movies Grid */}
        <div className="movies-grid">
          {filteredData.length < 0 ? (
            <img src="https://ik.imagekit.io/m9qnay09g/Animation%20-%201737285406045.gif?updatedAt=1737286046150">
            </img>
          ) : (
            filteredData.map((movie) => (
              <div className="movie-card" key={movie._id}>
                {editingMovie === movie._id ? (
                  <div className="EditMovieContainer">
                    <h4>Name:</h4>
                    <input
                      className="EditMovie-input"
                      value={editedFields.movieName || ""}
                      placeholder="Name"
                      onChange={(e) =>
                        handleInputChange("movieName", e.target.value)
                      }
                    />
                    <h4>Description:</h4>
                    <textarea
                      className="EditMovie-textarea"
                      value={editedFields.description || ""}
                      placeholder="Description"
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                    />
                    <h4>Year:</h4>
                    <input
                      className="EditMovie-input"
                      value={editedFields.year || ""}
                      placeholder="Year"
                      onChange={(e) =>
                        handleInputChange("year", e.target.value)
                      }
                    />
                    <h4>Image URL:</h4>
                    <input
                      className="EditMovie-input"
                      value={editedFields.poster || ""}
                      placeholder="Poster URL"
                      onChange={(e) =>
                        handleInputChange("poster", e.target.value)
                      }
                    />
                    <button className="save-button" onClick={handleSaveChanges}>
                      ✓
                    </button>
                    <button
                      className="cancel-button"
                      onClick={() => {
                        setEditingMovie(null);
                        setEditedFields({});
                      }}
                    >
                      𐌗
                    </button>
                  </div>
                ) : (
                  <>
                    <img
                      src={movie.poster}
                      alt={`${movie.movieName} poster`}
                      className="movie-poster"
                    />
                    <h2 className="movie-title">{movie.movieName}</h2>
                    {/* <p className="movie-description">{movie.description}</p> */}
                    <p className="movie-genre">
                      <b>Genre:</b>
                      {movie.genre}
                    </p>
                    <p className="movie-category">
                      <b>Category:</b>
                      {movie.category}
                    </p>
                    <strong className="movie-year">{movie.year}</strong>
                  </>
                )}
                <div className="movie-buttons">
                  <Link to={`/Movies/${movie._id}`}>
                    <button className="details-button">DETAILS</button>
                  </Link>
                  <button
                    onClick={() => handleEditStart(movie)}
                    className="Edit-button"
                  >
                    EDIT
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteData(movie._id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
