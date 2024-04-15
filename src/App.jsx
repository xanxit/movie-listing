import Sidebar from "./components/Sidebar";
import SearchModal from "./components/SearchModal";
import MovieListing from "./components/MovieListing";
import ResponsiveCarousel from "./components/HeroCarousel";

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
            <div className="justify-center items-center hidden">
              <SearchModal />
            </div>
            <div className="flex flex-col justify-center items-center lg:mt-8">
              <ResponsiveCarousel />
            </div>
            <div className="flex justify-center items-center mt-20">
              <MovieListing />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
