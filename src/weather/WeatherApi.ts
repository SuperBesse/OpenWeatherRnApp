import type {WeatherData} from 'weather/types';

const OPENWEATHERMAP_API_KEY = '5b2286185b4a9c92c8e960d3206dac5d';

type WeatherApiType = {
  fetchWeatherContent: (
    inseeCode: string,
    town: string,
  ) => Promise<WeatherData>;
  fetchWeatherContentWithLocation: (
    lat: string,
    lng: string,
  ) => Promise<WeatherData>;
};

export default function WeatherApi(): WeatherApiType {
  return {fetchWeatherContent, fetchWeatherContentWithLocation};

  function fetchWeatherContentWithLocation(
    lat: string,
    lng: string,
  ): Promise<WeatherData> {
    return undefined;
  }

  function fetchWeatherContent(
    inseeCode: string,
    town: string,
  ): Promise<WeatherData> {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${'Bordeaux'}&appid=${OPENWEATHERMAP_API_KEY}`,
    )
      .then(response => response.json())
      .then(weatherJson => {
        return weatherJson;
      })
      .catch(() => {
        return undefined;
      });
  }
}
