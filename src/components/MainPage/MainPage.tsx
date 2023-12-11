import './Mainpage.scss';
import { CarouselPage } from '../CarouselPage/CarouselPage';
import { DatePicker, Radio, RadioChangeEvent, Space, Select } from 'antd';
import { Footer } from '../Footer/Footer';
import { HeroPage } from '../HeroPage/HeroPage';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { citiesArray } from '../../models/citiesData';
const { Option} = Select;
const { RangePicker } = DatePicker;


export function Mainpage() {
  const [city,setCity]=useState<any[]>([]);
  const [num,setNum]=useState(1);
  const request=async()=>{
    await fetch('https://api.eightydays.me/api/v2/cities')

    .then((resp)=>resp.json())
    .then((res)=>setCity(res));
  };
  useEffect(()=>{
    request();
  },[num]);
  let newCityArray:any[]=[];
  for (let mainValueCity of Object.values(city)) {
    if(Object.keys(mainValueCity)[1]==='values'){
      for (let index = 0; index < mainValueCity['values'].length; index++) {
        newCityArray.push(mainValueCity['values'][index]['name']);
        // console.log(mainValueCity['values'][index]['name']);  
      }; 

    };
    
  };
  const [value, setValue] = useState(1);

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if(e.target.value===3){
      return(
        <Radio.Group name="radiogroup">
          <Radio value={2}>2 Cities</Radio>
          <Radio value={3}>3 Cities</Radio>
          <Radio value={4}>4 Cities</Radio>
        </Radio.Group>
      );
    }else{
      console.log('wrong choice');
    };
  };

  const onChangeSelect = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearchSelect = (value: string) => {
    console.log('search:', value);
  };
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const onChangeSelectfirst = (value: string) => {
      console.log(`selected ${value}`);
    };
    
    const onSearchSelectfirst = (value: string) => {
      console.log('search:', value);
    };
    const filterOptionfirst= (input: string, option?: { label: string; value: string }) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className="main-page-container">
      <HeroPage />
      <CarouselPage />
      <hr />
      <div className="search-container">
        <div className="search-main">
          <div className="search-form">
            <div className="selecting-flights-container">
              <div className="select-part">
                <Radio.Group onChange={onChangeRadio} value={value}>
                  <Radio value={1}>Return</Radio>
                  <Radio value={2}>One Way</Radio>
                  <Radio value={3}>Multi-City</Radio>
                </Radio.Group>
              </div>
            </div>
            <div className="rotation-main">
              <div className="rotation-container">
              <Select showSearch  placeholder='Where from?' className='countries-select'
                optionFilterProp="children"
                onChange={onChangeSelectfirst}
                onSearch={onSearchSelectfirst}
                filterOption={filterOptionfirst}
                >
                  {newCityArray.map((cityName)=>(
                    <Option  value={cityName} label={cityName}>{cityName}</Option>
                  ))
                  }
                </Select>
                <Select showSearch  placeholder='Where to?' className='countries-select'
                optionFilterProp="children"
                onChange={onChangeSelect}
                onSearch={onSearchSelect}
                filterOption={filterOption}
                >
                  {citiesArray.map((town)=>(
                    <Option value={town.name} label={town.name}>{town.name}</Option>
                  ))
                  }
                </Select>
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
