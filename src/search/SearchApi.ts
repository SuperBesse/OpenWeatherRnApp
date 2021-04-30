import {WeatherData} from 'weather/types';
import {getFindCitiesUrl} from './SearchUtils';
import Config from 'react-native-config';

type WeatherApiType = {
  findCities: (input: string) => Promise<WeatherData>;
};

export default function SearchApi(): WeatherApiType {
  return {findCities};

  function findCities(input: string): Promise<WeatherData> {
    const findCitiesApiurl = getFindCitiesUrl(
      input,
      Config.OPEN_WEATHERMAP_API_KEY,
    );
    return fetch(findCitiesApiurl)
      .then(response => response.json())
      .then(citiesJson => {
        return citiesJson;
      })
      .catch(() => {
        return undefined;
      });
  }
}
