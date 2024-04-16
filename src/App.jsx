import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import SearchModal from "./components/SearchModal";
import MovieListing from "./components/MovieListing";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [filteredMoviesList, setFilteredMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortTerm, setSortTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const sortParams = ["Release Date", "Popularity", "Ratings"];
  const apiCall = useMemo(
    () => async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=57df56edb2ad9a0e4eb9010ee59a23ef&language=en-US&page=${pageNumber}`
        );
        const test = res.data.results;
        setMovieList((prev) => [...prev, ...test]);
      } catch (err) {
        console.log(err);
      }
    },
    [pageNumber]
  );
  useEffect(() => {
    apiCall();
  }, [pageNumber]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredMovieList(movieList);
      return;
    }

    const filteredMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovieList(filteredMovies);
  }, [searchTerm, movieList]);

  const sortMoviesByTerm = (movies, sortTerm) => {
    return movies.slice().sort((a, b) => {
      if (sortTerm === 'Release Date') {
        return new Date(a.release_date) - new Date(b.release_date);
      } else if (sortTerm === 'Popularity') {
        return b.popularity - a.popularity;
      } else if (sortTerm === 'Ratings') {
        return b.vote_average - a.vote_average;
      }
      // Return 0 for unrecognized sortTerm
      return 0;
    });
  };

  useEffect(() => {
    const sortedMovies = sortMoviesByTerm(movieList, sortTerm);
    setFilteredMovieList(sortedMovies);
  }, [movieList, sortTerm]);
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div className="justify-center items-center">
              <SearchModal
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortParams={sortParams}
                sortTerm={sortTerm}
                setSortTerm={setSortTerm}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
            <div className="flex justify-center items-center mt-24">
              <MovieListing
                movieList={filteredMoviesList}
                setPageNumber={setPageNumber}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
