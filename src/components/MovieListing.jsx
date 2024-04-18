/* eslint-disable react/prop-types */
import "./movie.css";
const MovieListing = ({
  movieList,
  pageNumber,
  loading,
  setLoading,
  setPageNumber,
  elementRef
}) => {
  const handleLoadMore = async () => {
    setLoading((prev) => !prev);
    await setTimeout(() => {
      setPageNumber((prev) => prev + 1);
      setLoading(false);
    }, 2000);
  };
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
              <h2 className="card-title text-3xl pb-2 text-wrap">
                {ele.title}
              </h2>
              <p className="card-body py-6 line-clamp-6">{ele.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center lg:ml-28 py-10">
        {!loading ? (
          <button
            data-testid="loadMore"
            className="bg-gray-800 hover:bg-black rounded text-white h-12 w-auto px-6 mb-8 loader"
            onClick={handleLoadMore}
            ref={elementRef}
          >
            Load More
          </button>
        ) : (
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieListing;
