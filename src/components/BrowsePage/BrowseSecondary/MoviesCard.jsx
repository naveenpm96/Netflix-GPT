import React from "react";
import { SLIDER_IMG_URL } from "../../../utils/Constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesCard = ({ data, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };
  return (
    <div className="slider-dta w-full ">
      <Slider {...settings}>
        {data &&
          data.map((ele, i) => {
            return (
              <>
                <img
                  className="rounded"
                  key={i}
                  src={SLIDER_IMG_URL + ele.poster_path}
                  alt="slider"
                />
              </>
            );
          })}
      </Slider>
    </div>
  );
};

export default MoviesCard;
