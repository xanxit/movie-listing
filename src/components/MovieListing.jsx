import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./movie.css";

const MovieListing = () => {
  const [movieList, setMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
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
  return (
    <div className="flex flex-col gap-10 mt-4">
    <h1 className="text-4xl text-gray-700 lg:ml-28"> Movie List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-28">
        
        {movieList.map((ele, idx) => (
          <div
            className="card cursor-pointer"
            key={idx}
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w500/${ele.poster_path}")`,
            }}
          >
            <div className="card-content">
              <h2 className="card-title text-3xl pb-2 text-wrap">{ele.title}</h2>
              <p className="card-body py-6 line-clamp-6">{ele.overview}</p>
              <a href="#" className="button text-white hover:text-black">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieListing;
