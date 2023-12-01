import { CarouselPage } from '../CarouselPage/CarouselPage';
import { Footer } from '../Footer/Footer';
import { HeroPage } from '../HeroPage/HeroPage';
import './Mainpage.scss';
export function MainPage(){
    return(
        <div className='main-page-container'>
            <HeroPage/>
            <CarouselPage/>
            
        </div>

    )
}