import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FirebaseContext from "../ContextApi/FirebaseConfig";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/ViewMovie.css";

export const ViewMovie = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data, findMovie, movie } = useContext(FirebaseContext);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      await findMovie(id);
      setLoading(false);
    };

    fetchMovieDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (movie && Object.keys(movie).length > 0 && data.length > 0) {
      const filteredMovies = data.filter(
        (item) => item.category === movie.category && item._id !== id
      );
      setRelatedMovies(filteredMovies);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie, data]);

  function handleUpdateClick(upID) {
    navigate(`/movies/${upID}`);
  }

  return (
    <>
      <div className="single-movie-container">
        {loading ? (
          <p className="single-loading-message">Loading movie details...</p>
        ) : movie && Object.keys(movie).length > 0 ? (
          <div className="single-movie-details">
            <Link to={"/"}>
              <button className="backButton">
                <MoveLeft />
              </button>
            </Link>
            <img className="single-movie-URL" src={movie.poster} alt="" />
            <h2 className="single-movie-title">{movie.movieName}</h2>
            <p className="single-movie-description">{movie.description}</p>
            <strong className="single-movie-year">
              Release Year: {movie.year}
            </strong>
          </div>
        ) : (
          <p className="single-loading-message">No movie details found.</p>
        )}
      </div>
      <div className="show-related-movies">
        <h3>Related Movies</h3>
        <div className="related-movies-grid">
          {loading ? (
            <p>Loading related movies...</p>
          ) : relatedMovies.length > 0 ? (
            relatedMovies.map((relatedMovie) => (
              <div key={relatedMovie._id} className="movie-card">
                <button
                  onClick={() => handleUpdateClick(relatedMovie._id)}
                  style={{ width: "100%", backgroundColor: "black" }}
                  className="movie-card-image"
                >
                  <img
                    className="movie-card-image"
                    src={relatedMovie.poster}
                    alt={relatedMovie.movieName}
                  />
                </button>
              </div>
            ))
          ) : (
            <p>No related movies found.</p>
          )}
        </div>
      </div>
    </>
  );
};
