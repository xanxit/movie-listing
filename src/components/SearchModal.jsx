/* eslint-disable react/prop-types */
const SearchModal = ({
  searchTerm,
  setSearchTerm,
  sortParams,
  sortTerm,
  setSortTerm,
  isOpen,
  setIsOpen,
}) => {
  const handleSortChange = (value) => {
    setSortTerm(value);
    setIsOpen(prev=>!prev);
  };

  return (
    <form className="max-w-lg mx-auto absolute left-10 lg:left-1/3 top-10">
      <div className="flex shadow-lg">
        <button
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {sortTerm || "All categories"}{" "}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            id="dropdown"
            className="z-10 absolute top-full left-0 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow"
          >
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdown-button"
            >
              {sortParams.map((option, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                    value={option}
                    onClick={() => handleSortChange(option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="relative w-[200px] md:w-[400px] ">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            // onKeyDown={handleKeyDown}
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:outline-none"
            placeholder="Search for Movies"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-4 text-sm font-medium h-full text-white bg-gray-700 rounded-e-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 flex items-center justify-center"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchModal;
