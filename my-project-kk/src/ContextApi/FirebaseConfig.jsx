import axios from "axios";
import { useEffect, useState, createContext } from "react";

const FirebaseContext = createContext();

// eslint-disable-next-line react/prop-types
export const FirebaseConfig = ({ children }) => {
  const [editingMovie, setEditingMovie] = useState(null);
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState({});
  // const apiURL =
    // "https://firemovieapp-ea176-default-rtdb.firebaseio.com/Movies.json";
    // "https://firemovie-cea52-default-rtdb.asia-southeast1.firebasedatabase.app/Movies.json";

  // Fetch data
  const fetchData = async () => {
    try {
      // const response = await axios.get("http://localhost:5000/movies/");
      const response = await axios.get(
        "https://firemovies-backend.onrender.com/movies"
      );
      const fetchedData = response.data;
      // const formattedData = fetchedData
      //   ? Object.entries(fetchedData).map(([id, value]) => ({
      //       id,
      //       ...value,
      //     }))
      //   : [];
      console.log(fetchedData);
      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Data
  const addData = async (newMovie) => {
    try {
       await axios.post(
        "https://firemovies-backend.onrender.com/movies/",
        newMovie
      );
      // const newId = response.data.name;
      // // setData([...data, { id: newId, ...newMovie }]);
      // setData([...data, { id: newId, ...newMovie }]);
      fetchData()
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Data
  const deleteData = async (id) => {
    console.log("Id: ",id)
    try {
      await axios.delete(
        // `https://firemovieapp-ea176-default-rtdb.firebaseio.com/Movies/${id}.json`
        // `https://firemovie-cea52-default-rtdb.asia-southeast1.firebasedatabase.app/Movies/${id}.json`
        `https://firemovies-backend.onrender.com/movies/${id}`
      );
      setData(data.filter((movie) => movie._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Find Movie
  const findMovie = async (id) => {
    try {
      const response = await axios.get(
        // `https://firemovieapp-ea176-default-rtdb.firebaseio.com/Movies/${id}.json`
        // `https://firemovie-cea52-default-rtdb.asia-southeast1.firebasedatabase.app/Movies/${id}.json`
        `https://firemovies-backend.onrender.com/movies/${id}`
      );
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Edit movie
  const editMovie = async (id, updatedFieldsArray) => {
    try {
      const updatedMovie = updatedFieldsArray[0];
      await axios.put(
        // `https://firemovieapp-ea176-default-rtdb.firebaseio.com/Movies/${id}.json`,
        // `https://firemovie-cea52-default-rtdb.asia-southeast1.firebasedatabase.app/Movies/${id}.json`,
        `https://firemovies-backend.onrender.com/movies/${id}`,
        updatedMovie
      );
      const newUpdatedMovies = data.map((movie) =>
        movie._id === id ? updatedMovie : movie
      );
      setData(newUpdatedMovies);
      setEditingMovie(null);
    } catch (error) {
      console.error("Error editing movie:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        data,
        movie,
        editMovie,
        editingMovie,
        setEditingMovie,
        fetchData,
        addData,
        deleteData,
        findMovie,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
