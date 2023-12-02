import { CarouselPage } from "../CarouselPage/CarouselPage";
import { HeroPage } from "../HeroPage/HeroPage";
import "./Mainpage.scss";
export function Mainpage() {
  return (
    <div className="main-page-container">
      <HeroPage />
      <CarouselPage />
      <div className="search-container">
        <div className="search-main">
          <div className="property-of-search">
            <div className="flights-container">
              <span></span>
              <span>Flights</span>
            </div>
            <div className="hotels-container">
              <span></span>
              <span>Hotels</span>
            </div>
          </div>
          <div className="selecting-flights-container">
            <div className="select-part">
              <div className="return-container center">
                <input type="radio" className="return-select" />
                <label>Return</label>
              </div>
              <div className="oneway-container center">
                <input type="radio" className="oneway-select" />
                <label>One Way</label>
              </div>
              <div className="multicity-container center">
                <input type="radio" className="multicity-select" />
                <label>Multi-City</label>
              </div>
              <div className="type-of-flight">
                <select className="type-select">
                  <option value="business">Business</option>
                  <option value="economy">Economy</option>
                </select>
              </div>
            </div>
          </div>
          <div className="rotation-main">
            <div className="rotation-container">
              <input type="text" placeholder="Where From?"/>
              <input type="text" placeholder="Where To?"/>
              <input type="text" placeholder="Departure"/>
              <input type="text" placeholder="Where To?"/>
            </div>
          </div>
        <div className="search-button">
          <button>Search Flights</button>
        </div>
        </div>
      </div>
    </div>
  );
}
