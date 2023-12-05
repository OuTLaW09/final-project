import "./Mainpage.scss";
import { Footer } from "../Footer/Footer";
import { CarouselPage } from "../CarouselPage/CarouselPage";
import { HeroPage } from "../HeroPage/HeroPage";
import { DatePicker, Space } from "antd";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

 

const { RangePicker } = DatePicker;

export function Mainpage() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="main-page-container">
      <HeroPage />
      <CarouselPage />
      <hr />
      <div className="search-container">
        <div className="search-main">
          <div className="property-of-search"></div>
          <div className="selecting-flights-container">
            <div className="select-part">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Return</Radio>
                <Radio value={2}>One Way</Radio>
                <Radio value={3}>Multi-City</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="rotation-main">
            <div className="rotation-container">
              <input type="text" placeholder="Where From?" />
              <input type="text" placeholder="Where To?" />
              <Space direction="vertical" size={12}>
                <RangePicker placeholder={["Departure", "Return"]} />
              </Space>
            </div>
          </div>
          <div className="search-button">
            <button>Search Flights</button>
          </div>
        </div>
      </div>
      <Footer />
      <div className="last-part-mainpage">
        <div>
          <a href="">Privacy Policy</a>
        </div>
        <div>
          <a href="">All rights revered 2023 @Travel Agency</a>
        </div>
        <div>
          <a href="">Terms&Conditions</a>
        </div>
      </div>
    </div>
  );
}
