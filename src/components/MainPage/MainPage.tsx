import './Mainpage.scss';
import { CarouselPage } from '../CarouselPage/CarouselPage';
import { DatePicker, Radio, RadioChangeEvent, Select, Space } from 'antd';
import { Footer } from '../Footer/Footer';
import { HeroPage } from '../HeroPage/HeroPage';
import { Link } from 'react-router-dom';
import { citiesArray, citiesThemes } from '../../models/citiesData';
import React, { useEffect, useState } from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

type ChoosenCitiesType = {
  name: string;
  weight?: number | null;
  nameSearch: string;
  nameAddition?: string;
  codeIata: string;
  codeSky?: null | string;
  timezoneIana: string;
  bookingUrl: string;
  airbnbUrl?: string;
  themes: string[];
  icon: null;
  location: number[];
  countryId: string;
  docId: string;
  dayTrips?: undefined;
  startThemes: string[];
  apiVersion?: string;
  content?: object | null;
};

export function Mainpage() {
  const [whereFromValue, setWhereFromValue] = useState<string>('');
  const [cityTheme, setCityTheme] = useState<string>('');
  const [choosenCity, setChoosenCity] = useState<ChoosenCitiesType[]>([]);
  const[lastChoosenCity,setLastChoosenCity]=useState<ChoosenCitiesType[]>([]);
  const [city, setCity] = useState<any[]>([]);
  const [num, setNum] = useState(1);
  const request = async () => {
    await fetch('https://api.eightydays.me/api/v2/cities')
      .then((resp) => resp.json())
      .then((res) => setCity(res));
  };
  useEffect(() => {
    request();
  }, [num]);
  let newCityArray = [];
  let choosenCityArray:any[]=[];
  let lastChoosenCityArray:any[]=[];
  for (let mainValueCity of Object.values(city)) {
    if (Object.keys(mainValueCity)[1] === 'values') {
      for (let index = 0; index < mainValueCity['values'].length; index++) {
        newCityArray.push(mainValueCity['values'][index]['name']);
      }
    }
  }

  

  const onChangeSelect = (value: string) => {
    const newCitiesArray: ChoosenCitiesType[] = [];
    citiesArray.forEach((City, index) => {
      City.startThemes.forEach((startTheme) => {
        const matchingTheme = citiesThemes.find((theme) => theme.code === startTheme);
        if (matchingTheme && matchingTheme.name === value) {
          if (matchingTheme.code === startTheme) {
            choosenCityArray.push(City);
          }
        }
      });
    });
    setChoosenCity(choosenCityArray);
    
  };
  console.log(choosenCity);

  const onSearchSelect = (value: string) => {
    console.log('search:', value);
  };
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onChangeSelectfirst = (value: string) => {
    console.log(`selected ${value}`);
    setWhereFromValue(value);
  };

  const onSearchSelectfirst = (value: string) => {
    console.log('search:', value);
  };
  const filterOptionfirst = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onChangeCountCity = (value: string) => {
    {
      for (let index = 0; index < Number(value); index++) {
        const random = Math.floor(Math.random() * choosenCity.length);
        console.log(choosenCity.length);

        for (let i = 0; i < lastChoosenCity.length; i++) {
          if (choosenCity[random] === lastChoosenCity[i]) {
            continue;
          }
        }
        lastChoosenCityArray.push(choosenCity[random]);
        setLastChoosenCity(lastChoosenCityArray);
      }
    }
  };
console.log(lastChoosenCity);
  const onSearchCountCity = (value: string) => {
    console.log('search:', value);
  };
  const filterOptionCountCity = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className="main-page-container">
      <HeroPage />
      <CarouselPage />
      <hr />
      <div className="search-container">
        <div className="search-main">
          <div className="search-form">
            <div className="rotation-main">
              <div className="rotation-container">
                <Select
                  showSearch
                  placeholder="Where from?"
                  className="countries-select"
                  optionFilterProp="children"
                  onChange={onChangeSelectfirst}
                  onSearch={onSearchSelectfirst}
                  filterOption={filterOptionfirst}
                >
                  {newCityArray.map((cityName) => (
                    <Option key={cityName} value={cityName} label={cityName}>
                      {cityName}
                    </Option>
                  ))}
                </Select>
                <Select
                  showSearch
                  placeholder="Filter"
                  className="countries-select"
                  optionFilterProp="children"
                  onChange={(e) => {
                    setCityTheme(e);
                    onChangeSelect(e);
                  }}
                  onSearch={onSearchSelect}
                  filterOption={filterOption}
                >
                  {citiesThemes.map((town) => (
                    <Option value={town.name} label={town.name}>
                      {town.name}
                    </Option>
                  ))}
                </Select>
                <Select
                  className="count-of-city"
                  showSearch
                  placeholder="Count of City"
                  optionFilterProp="children"
                  onChange={onChangeCountCity}
                  onSearch={onSearchCountCity}
                  filterOption={filterOptionCountCity}
                  options={[
                    {
                      value: '1',
                      label: '1',
                    },
                    {
                      value: '2',
                      label: '2',
                    },
                    {
                      value: '3',
                      label: '3',
                    },
                    {
                      value: '4',
                      label: '4',
                    },
                  ]}
                />
                <Space direction="vertical" size={12}>
                  <RangePicker placeholder={['Departure', 'Return']} />
                </Space>
              </div>
            </div>
            <div className="search-button">
              <Link to="map-page">
                <button>Search Flights</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="last-part-mainpage">
        <div>
          <a href="/">Privacy Policy</a>
        </div>
        <div>
          <a href="/">All rights revered 2023 @Travel Agency</a>
        </div>
        <div>
          <a href="/">Terms&Conditions</a>
        </div>
      </div>
    </div>
  );
}
