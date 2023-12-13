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
export function Mainpage() {
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
  let newCityArray: any[] = [];
  for (let mainValueCity of Object.values(city)) {
    if (Object.keys(mainValueCity)[1] === 'values') {
      for (let index = 0; index < mainValueCity['values'].length; index++) {
        newCityArray.push(mainValueCity['values'][index]['name']);
        // console.log(mainValueCity['values'][index]['name']);
      }
    }
  }
  console.log(newCityArray);
  console.log(newCityArray.length);

  const [value, setValue] = useState(1);

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if (e.target.value === 3) {
      return (
        <Radio.Group name="radiogroup">
          <Radio value={2}>2 Cities</Radio>
          <Radio value={3}>3 Cities</Radio>
          <Radio value={4}>4 Cities</Radio>
        </Radio.Group>
      );
    } else {
      console.log('wrong choice');
    }
  };

  const onChangeSelect = (value: string) => {
    console.log(`selected ${value}`);
    cityTheme = value;
    for (let index = 0; index < citiesArray.length; index++) {
      for (let i = 0; i < citiesArray[index].startThemes.length; i++) {
        for (let j = 0; j < citiesThemes.length; j++) {
          if (citiesThemes[j].name === cityTheme) {
            if (citiesThemes[j].code === citiesArray[index].startThemes[i]) {
              choosenCity.push(citiesArray[index]);
            }
          }
        }
      }
    }
    console.log(choosenCity);
  };

  const onSearchSelect = (value: string) => {
    console.log('search:', value);
  };
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onChangeSelectfirst = (value: string) => {
    console.log(`selected ${value}`);
    whereFromValue = value;
  };

  const onSearchSelectfirst = (value: string) => {
    console.log('search:', value);
  };
  const filterOptionfirst = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onChangeCountCity = (value: string) => {
    console.log(`selected ${value}`);
    for (let index = 0; index < Number(value); index++) {
      const random = Math.floor(Math.random() * choosenCity.length);

      for (let i = 0; i < lastChoosenCity.length; i++) {
        if (choosenCity[random] === lastChoosenCity[i]) {
          continue;
        }
      }
      lastChoosenCity.push(choosenCity[random]);
      console.log(lastChoosenCity);
    }
  };

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
                    <Option value={cityName} label={cityName}>
                      {cityName}
                    </Option>
                  ))}
                </Select>
                <Select
                  showSearch
                  placeholder="Filter"
                  className="countries-select"
                  optionFilterProp="children"
                  onChange={onChangeSelect}
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
