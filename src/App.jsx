import Sidebar from "./components/Sidebar";
import SearchModal from "./components/SearchModal";
import MovieListing from "./components/MovieListing";

function App() {
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
              <SearchModal />
            </div>
            <div className="flex justify-center items-center mt-24">
              <MovieListing />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
