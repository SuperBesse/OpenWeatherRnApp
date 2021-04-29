import type {WeatherData} from 'weather/types';
import {getWeatherUrlForCity} from 'weather/utils';

const OPEN_WEATHERMAP_API_KEY = '5b2286185b4a9c92c8e960d3206dac5d';

type WeatherApiType = {
  fetchWeatherContent: (cityName: string) => Promise<WeatherData>;
};

export default function WeatherApi(): WeatherApiType {
  return {fetchWeatherContent};

  function fetchWeatherContent(cityName: string): Promise<WeatherData> {
    const weatherApiurl = getWeatherUrlForCity(
      cityName,
      OPEN_WEATHERMAP_API_KEY,
    );
    return fetch(weatherApiurl)
      .then(response => response.json())
      .then(weatherJson => {
        return weatherJson;
      })
      .catch(() => {
        return undefined;
      });
  }
}
