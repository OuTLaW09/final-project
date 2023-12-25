import './Mainpage.scss';
import { CarouselPage } from '../CarouselPage/CarouselPage';
import { City, citiesArray, citiesThemes } from '../../models/citiesData';
import { CityResponse } from '../../models/CityResponse';
import { DatePicker, Form, Modal, Select, Space } from 'antd';
import { Footer } from '../Footer/Footer';
import { HeroPage } from '../HeroPage/HeroPage';
import { Link, useNavigate } from 'react-router-dom';
import { checkLogIn } from '../../App';
import React, { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

const { Option } = Select;
const { RangePicker } = DatePicker;
type RangeValue = [Dayjs | null, Dayjs | null] | null;



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
  const navigate = useNavigate();
  const [whereFromValue, setWhereFromValue] = useState<string>('');
  const [cityTheme, setCityTheme] = useState<string>('');
  const [cities, setCities] = useState<City[]>([]);
  const [num, setNum] = useState(1);

  const request = async () => {
    const response = await fetch('https://api.eightydays.me/api/v2/cities');
    const cities = (await response.json()) as CityResponse;
    setCities(cities.data.values);
  };

  useEffect(() => {
    request();
  }, [num]);

  const onFinishForm = async (values: any) => {
    if (value) {
      const date1 = value[0]?.format('YYYY-MM-DD');
      const date2 = value[1]?.format('YYYY-MM-DD');
      const payload = {
        type: 'AZ',
        version: 3,
        debug: 0,
        deviceIdentifier: 'web',
        citiesCount: null,
        payload: {
          constraints: {
            timestamp: 0,
            lastRoute: [],
          },
          themeId: values.themeId,
          defined_points: {
            mandatory: [],
          },
          excluded_points: [],
          start_point: {
            date: date1,
            cityId: values.cityId,
            type: 'strict',
          },
          end_point: {
            date: date2,
            cityId: values.cityId,
            type: 'strict',
          },
        },
      };
      const response = await fetch('https://api.eightydays.me/api/v3/tour/build', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.signature) {
        navigate(`map-page/${data.signature}`);
        console.log(data.signature);
      }
    }
    console.log(values, 'on finish form values');
  };

  const onFinishFailedForm = (errorInfo: any) => {
    return( errorInfo);
  };

  const onChangeSelect = (value: string) => {
    return(value);
   
  };


  const onSearchSelect = (value: string) => {
    return( value);
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
  const filterOptionCountCity = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const [dates, setDates] = useState<RangeValue>(null);

  const disabledDate = (current: Dayjs) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') >= 12;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 12;
    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  const onChangeDate = (val: RangeValue) => {
    setValue(val);
  };

  const [value, setValue] = useState<RangeValue>(null);

  return (
    <div className="main-page-container">
      <HeroPage />
      <CarouselPage />
      <div className="search-container">
        <div className="search-main">
          <Form className="search-form" onFinish={onFinishForm} name="searchForm" onFinishFailed={onFinishFailedForm}>
            <div className="rotation-main">
              <div className="rotation-container">
                <div className="build-trip-container">
                  <p>Let's Build Your Trip</p>
                </div>
                <Form.Item rules={[{ required: true, message: 'Please select an option' }]} name="cityId">
                  <Select
                    showSearch
                    placeholder="Where from?"
                    className="countries-select"
                    optionFilterProp="children"
                    onChange={onChangeSelectfirst}
                    onSearch={onSearchSelectfirst}
                    filterOption={filterOptionfirst}
                  >
                    {citiesArray.map((city) => (
                      <Option key={city.docId} value={city.docId} label={city.name}>
                        {city.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="themeId">
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
                      <Option key={town.docId} value={town.docId} label={town.name}>
                        {town.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="dates">
                  <Space direction="vertical" size={12}>
                    <RangePicker
                      placeholder={['Departure', 'Return']}
                      value={dates || value}
                      disabledDate={disabledDate}
                      onCalendarChange={(val) => {
                        setDates(val);
                      }}
                      onChange={onChangeDate}
                      onOpenChange={onOpenChange}
                      changeOnBlur
                    />
                  </Space>
                </Form.Item>
                <Form.Item>
                  <div className="search-button">
                    {checkLogIn ? (
                      <button>Search Flights</button>
                    ) : (
                      <Link to="login">
                        <button type="button">Search flights</button>
                      </Link>
                    )}
                  </div>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
