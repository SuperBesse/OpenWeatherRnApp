export interface WeatherMap {
  [key: string]: WeatherData[];
}

export interface WeatherData {
  coord: Coordinates;
  weather: [];
  base: string;
  main: MainWeatherData;
  visibility: number;
  wind: WindWeatherData;
  clouds: CloudsWeatherData;
  sys: System;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface System {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface CloudsWeatherData {
  all: number;
}

export interface WindWeatherData {
  speed: number;
  deg: number;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface WeatherHour {
  direction: string; //ONO SSE O NO N NE
  icon: number;
  precip: number;
  tsol: number;
  wind: number;
  hour: number;
}

export interface WeatherDay {
  hour: [WeatherHour];
  tmin: number;
  tavg: number;
  tmax: number;
}
