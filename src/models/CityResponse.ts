import { City } from './citiesData';

export interface CityResponse {
  data: {
    values: City[];
    count: number;
  };
  status: {
    code: number;
  };
}
