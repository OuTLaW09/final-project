import React from 'react';
import { Carousel } from 'antd';
import { cities } from '../../models/CarouselObject';
import './CarouselPage.scss';

interface Cities{
    imageUrl: string;
    seasons: string[];
    rating: number;
    packages: string[];
    description: string
}
interface ArrayProps{
    items:Cities[]
}
export const CarouselPage: React.FC = () => {
    const onChange = (currentSlide: number) => {
      console.log(currentSlide);
    };
  
    return (
      <Carousel afterChange={onChange}>
        {
            cities.map((item)=>(
                <div className='main-carousel'>
                    <div className='city-card'>
                        <img className="carousel-image"src={item.imageUrl} />
                        <div className="about-city-container">
                        <p >Suitable Seasons:{item.seasons}</p>
                        <p>Rating:{item.rating}</p>
                        <p>Packages:{item.packages}</p>
                        </div>
                        <p >Description:{item.description}</p>

                    </div>
                    
                </div>
            ))
        }
       
        
      
      

        
       
      </Carousel>
    );
  };
  

  