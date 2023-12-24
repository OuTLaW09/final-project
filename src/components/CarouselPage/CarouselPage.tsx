import './CarouselPage.scss';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { cities } from '../../models/CarouselObject';
import React, { useEffect } from 'react';


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
                    <img alt="" src={item.icon} />
                  </div>
                  <div className="about-city-container">
                  <p className="place-name">{item.name}</p>
                  
                    
                  </div>
                </div>
                <div className="description-of-places">
               
                <p className="city-properties">{item.content?.shortDesc}</p>
                 <p>Top Reason:{item.content?.topReason}</p> 
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="footer-of-carousel">
        <div className="carousel-footer-container">
          <p className="upper-word">Prime Hottest Deals</p>
          <p className="down-word">Save big and visit these dream destinations!</p>
        </div>
      </div>
    </div>
  );
};
