/* eslint-disable react/prop-types */
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../styles/Carousel.css"; // Create a specific CSS file for styling

const Carousel = ({ carouselData }) => {
  return (
    <div className="carousel-container">
      <Swiper navigation={true} modules={[Navigation]} className="swiper">
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide">
              <img
                src={item.image}
                alt={item.name}
                className="carousel-image"
              />
              <div className="carousel-details">
                <h2>{item.name}</h2>
                <p>
                  <b>Genre:</b> {item.genre}
                </p>
                <p>
                  <b>Category:</b> {item.category}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
