import { CarouselPage } from '../CarouselPage/CarouselPage';
import { Footer } from '../Footer/Footer';
import { HeroPage } from '../HeroPage/HeroPage';
import './MainPage.scss';
export function MainPage(){
    return(
        <>
        <HeroPage/>
        <CarouselPage/>
        <Footer/>
        </>

    )
}