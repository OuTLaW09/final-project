import React from 'react';
import { Carousel } from 'antd';
import { cities } from '../../models/CarouselObject';
import { Content } from 'antd/es/layout/layout';

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
const contentStyle: React.CSSProperties = {
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    margin: 0,
    alignItems:'center',
    background: '#364d79',
  };

  
export const CarouselPage: React.FC = () => {
    const onChange = (currentSlide: number) => {
      console.log(currentSlide);
    };
  
    return (
      <Carousel afterChange={onChange}>
        {
            cities.map((item)=>(
                <div>
                    <div style={contentStyle}>
                        <img src={item.imageUrl} alt="" />
                        <p >Seosons:{item.seasons}</p>
                        <p>Rating:{item.rating}</p>
                        <p>Packages:{item.packages}</p>
                        <p >Description:{item.description}</p>

                    </div>
                    
                </div>
            ))
        }
       
        
      
      

        
       
      </Carousel>
    );
  };
  

  