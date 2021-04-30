import {SearchCitiesResult} from 'search/Types';
import {getFindCitiesUrl} from './SearchUtils';
import Config from 'react-native-config';

type SearchApiType = {
  findCities: (input: string) => Promise<SearchCitiesResult>;
};

export default function SearchApi(): SearchApiType {
  return {findCities};

  function findCities(input: string): Promise<SearchCitiesResult> {
    const findCitiesApiurl = getFindCitiesUrl(
      input,
      Config.OPEN_WEATHERMAP_API_KEY,
    );
    return fetch(findCitiesApiurl)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          return response.json();  
        }
        return [];
      })
      .then(citiesJson => {
        return citiesJson;
      })
      .catch(e => {
        console.log(e);
        return undefined;
      });
  }
}
