import type {WeatherData} from 'weather/types';
import {getWeatherUrlForCity} from 'weather/utils';
import Config from 'react-native-config';

type WeatherApiType = {
  fetchWeatherContent: (cityName: string) => Promise<WeatherData>;
};

export default function WeatherApi(): WeatherApiType {
  return {fetchWeatherContent};

  function fetchWeatherContent(cityName: string): Promise<WeatherData> {
    const weatherApiurl = getWeatherUrlForCity(
      cityName,
      Config.OPEN_WEATHERMAP_API_KEY,
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
