import {Info} from './character';

export interface LocationI {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
export interface LocationsApiResponse {
  info: Info;
  results: LocationI[];
}

