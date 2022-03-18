export type TInitialState = {
  wheatherList: getWheatheResponse | null;
};

export type getWheatherRequest = {
  town: string;
  wheatherList: [];
};

export type getWheatheResponse = {
  city: {};
  cod: string;
  list: listWeather[];
};

export type listWeather = {
  dt: number;
  humidity: number;
  pressure: number;
  temp: {
    average: number;
    average_max: number;
    average_min: number;
    record_max: number;
    record_min: number;
  };
  wind_speed: number;
};
