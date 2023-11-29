import React, { useEffect } from "react";
import { Carousel } from "antd";
import { cities } from "../../models/CarouselObject";
import "./CarouselPage.scss";
import { CarouselRef } from "antd/es/carousel";

interface Cities {
  imageUrl: string;
  seasons: string[];
  rating: number;
  packages: string[];
  description: string;
}
interface ArrayProps {
  items: Cities[];
}
export const CarouselPage: React.FC = () => {
  const carouselRef = React.createRef<CarouselRef>();
  const carouselWrapperRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const handleWindowWheel = (event: WheelEvent) => {
      if (isChildOfCarouselWrapper(event.target as HTMLElement)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWindowWheel);
    };
  }, []);

  const isChildOfCarouselWrapper = (currentNode: HTMLElement): boolean => {
    if (currentNode.tagName === "BODY") {
      return false;
    }

    if (currentNode.className === "carousel-wrapper") {
      return true;
    }

    return isChildOfCarouselWrapper(currentNode.parentElement as HTMLElement);
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const handleWheel = (event: React.WheelEvent) => {
    event.deltaY > 0
      ? carouselRef.current?.next()
      : carouselRef.current?.prev();
  };

  return (
    <div className="wrapper">
      <div
        onWheel={(event) => handleWheel(event)}
        className="carousel-wrapper"
        ref={carouselWrapperRef}
      >
        <Carousel
          afterChange={onChange}
          className="main-carousel"
          ref={carouselRef}
        >
          {cities.map((item) => (
            // <div className='main-carousel'>
            <div className="city-card">
              <img className="carousel-image" src={item.imageUrl} />
              <div className="about-city-container">
                <p>Suitable Seasons:{item.seasons}</p>
                <p>Rating:{item.rating}</p>
                <p>Packages:{item.packages}</p>
              </div>
              <p>Description:{item.description}</p>
            </div>

            // </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
