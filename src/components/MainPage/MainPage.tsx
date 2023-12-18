import './Mainpage.scss';
import { CarouselPage } from '../CarouselPage/CarouselPage';
import { DatePicker, Select, Space } from 'antd';
import { Footer } from '../Footer/Footer';
import { HeroPage } from '../HeroPage/HeroPage';
import { Link } from 'react-router-dom';
import { citiesArray, citiesThemes } from '../../models/citiesData';
import React, { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

const { Option } = Select;
const { RangePicker } = DatePicker;
type RangeValue = [Dayjs | null, Dayjs | null] | null;

export let DepartureArray: any[] = [];
export let DepartureArrayName: string[] = [];
export let themeId: string = '';
export let docId: string = '';

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
  const [choosenCity, setChoosenCity] = useState<ChoosenCitiesType[]>([]);
  const [lastChoosenCity, setLastChoosenCity] = useState<ChoosenCitiesType[]>([]);
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
  const newCityArray: any[] = [];
  const rotationArrayNames: string[] = [];
  const newCityArrayLocation: number[] = [];
  const choosenCityArray: ChoosenCitiesType[] = [];
  const lastChoosenCityArray: ChoosenCitiesType[] = [];
  const newCityArrayDocId: string[] = [];
  const rotationArray: any[] = [];
  console.log(docId, whereFromValue);


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
        // navigate to map component
        navigate(`map-page/${data.signature}`);
        console.log(data.signature);
      }
    }
    console.log(values, 'on finisf form values');
  };



  const onFinishFailedForm = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChangeSelect = (value: string) => {
    citiesArray.forEach((City) => {
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
    setCityTheme(value);
  };
  citiesThemes.forEach((filter) => {
    if (cityTheme === filter.name) {
      themeId = filter.docId;
    }
  });
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

  for (let indexName = 0; indexName < newCityArray.length; indexName++) {
    if (whereFromValue === newCityArray[indexName]) {
      for (let indexLoc = 0; indexLoc < newCityArrayLocation.length; indexLoc++) {
        if (indexLoc === indexName) {
          rotationArray.push(newCityArrayLocation[indexLoc]);
          rotationArrayNames.push(newCityArray[indexName]);
        }
      }
    }
  }

  lastChoosenCity.forEach((lastCity) => {
    rotationArray.push(lastCity.location);
    rotationArrayNames.push(lastCity.name);
  });
  DepartureArray = rotationArray;
  DepartureArrayName = rotationArrayNames;
  console.log(DepartureArrayName);
  console.log(DepartureArray);

  return (
    <div className="main-page-container">
      <HeroPage />
      <CarouselPage />
      <hr />
      <div className="search-container">
        <div className="search-main">
          <Form className="search-form" onFinish={onFinishForm} name="searchForm" onFinishFailed={onFinishFailedForm}>
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
                    <Option key={town.docId} value={town.name} label={town.name}>
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
                  <RangePicker
                    placeholder={['Departure', 'Return']}
                    value={dates || value}
                    disabledDate={disabledDate}
                    onCalendarChange={(val) => {
                      setDates(val);
                    }}
                    onChange={(val) => {
                      setValue(val);
                    }}
                    onOpenChange={onOpenChange}
                    changeOnBlur
                  />
                </Space>
              </div>
            </div>
          </Form>
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
