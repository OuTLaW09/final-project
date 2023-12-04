import "./Mainpage.scss";
import { Footer } from "../Footer/Footer";
import { CarouselPage } from "../CarouselPage/CarouselPage";
import { HeroPage } from "../HeroPage/HeroPage";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const customFormat: DatePickerProps['format'] = (value) =>
  `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
    <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
  </Space>
);

export default App;

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
              <DatePicker picker="date"/>
              
              <input type="text" placeholder="Where To?"/>
            </div>
          </div>
        <div className="search-button">
          <button>Search Flights</button>
        </div>
        </div>
      </div>
      <Footer/>
  
    </div>
  );
}
