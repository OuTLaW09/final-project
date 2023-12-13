import './CarouselPage.scss';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { cities } from '../../models/CarouselObject';
import React, { useEffect } from 'react';

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

    window.addEventListener('wheel', handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, []);

  const isChildOfCarouselWrapper = (currentNode: HTMLElement): boolean => {
    if (currentNode?.tagName === 'BODY') {
      return false;
    }

    if (currentNode.className === 'carousel-wrapper') {
      return true;
    }

    return isChildOfCarouselWrapper(currentNode.parentElement as HTMLElement);
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const handleWheel = (event: React.WheelEvent) => {
    event.deltaY > 0 ? carouselRef.current?.next() : carouselRef.current?.prev();
  };

  return (
    <div className="carousel-page">
      <div className="wrapper">
        <div onWheel={(event) => handleWheel(event)} className="carousel-wrapper" ref={carouselWrapperRef}>
          <Carousel afterChange={onChange} className="main-carousel" ref={carouselRef}>
            {cities.map((item) => (
              <div className="city-card">
                <div className="city-card-flex">
                  <div className="carousel-image-container">
                    <img alt="" src={item.imageUrl} />
                  </div>
                  <div className="about-city-container">
                    <p className="place-name">{item.name}</p>
                    <p className="city-properties">Suitable Seasons:{item.seasons}</p>
                    <p className="city-properties">Rating:{item.rating}</p>
                    <p className="city-properties">Packages:{item.packages}</p>
                  </div>
                </div>
                <p className="description-of-places">{item.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="footer-of-carousel">
        <div className="upper-word">
          <span className="prime">Prime</span>
          <span className="hottest-deals">Hottest Deals</span>
        </div>
        <div className="down-word">Save big and visit these dream destinations!</div>
      </div>
    </div>
  );
};
