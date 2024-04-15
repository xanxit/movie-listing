import React, { useEffect, useMemo, useState } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import axios from "axios";

const Card = React.memo(
  function Card(props) {
    const { data, dataIndex } = props;
    const { backdrop_path } = data[dataIndex];
    return (
      <div className="w-full mx-4 lg:w-auto lg:mx-0 lg:ml-40 h-full lg:h-[400px]">
        <img
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 10,
          }}
          draggable={false}
          className=""
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={`Cover ${dataIndex}`}
        />

      </div>
    );
  },
  function (prev, next) {
    return prev.dataIndex === next.dataIndex;
  }
);

function ResponsiveCarousel() {
  const [heroImages, setHeroImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(187);
  const apiCall = useMemo(
    () => async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=57df56edb2ad9a0e4eb9010ee59a23ef&language=en-US&page=${pageNumber}`
        );
        const test = res.data.results;
        setHeroImages((prev) => [...prev, ...test]);
      } catch (err) {
        console.log(err);
      }
    },
    [pageNumber]
  );
  useEffect(() => {
    apiCall();
  }, [pageNumber]);
  const ref = React.useRef();

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          else if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              data={heroImages}
              carouselWidth={parentWidth}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              slideComponent={Card}
              maxVisibleSlide={7}
              currentVisibleSlide={currentVisibleSlide}
              useGrabCursor={true}
            />
          );
        }}
      />
    </div>
  );
}

export default ResponsiveCarousel;
