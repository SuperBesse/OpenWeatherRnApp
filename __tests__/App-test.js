/**
 * @format
 */

import 'react-native';
import {formatTemperature, getIconImageUrl} from 'weather/utils';
import {getFlagUrl} from 'src/search/SearchUtils';

describe('Weather Utils', () => {
  it('should return a formated temperature from raw value', () => {
    const formatTemp = formatTemperature(15.7878);
    expect(formatTemp).toEqual('16°C');
  });
  it('should return a formated temperature from raw value without comma', () => {
    const formatTemp = formatTemperature(15);
    expect(formatTemp).toEqual('15°C');
  });
  it('should return a correct url to get icon from weather value', () => {
    const formatIconUrl = 'https://openweathermap.org/img/w/551.png'
    expect(formatIconUrl).toEqual(getIconImageUrl(551));
  });

  //TODO: fix import of native modules
  /*it('should return a correct url to get weather details from a city name', () => {
    const formatWeatherInfosUrl = `https://api.openweathermap.org/data/2.5/weather?q=${'Paris'}&appid=${Config.OPEN_WEATHERMAP_API_KEY}&units=metric`;
    const expectedWeatherInfosUrl = getWeatherUrlForCity('Paris');
    expect(formatWeatherInfosUrl).toEqual(expectedWeatherInfosUrl);
  });*/
});

describe('Search Utils', () => {
  //TODO: fix import of native modules
  /*it('should return a valid url for getting cities', () => {
    const validUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${Config.OPEN_WEATHERMAP_API_KEY}`;
    expect(formatTemp).toEqual(getFindCitiesUrl(Paris, Config.OPEN_WEATHERMAP_API_KEY));
  });*/
  it('should return a valid url for getting flag url with maj locale', () => {
    const validUrl = 'https://flagcdn.com/32x24/fr.png';
    expect(validUrl).toEqual(getFlagUrl('FR'));
  });
  it('should return a valid url for getting flag url', () => {
    const validUrl = 'https://flagcdn.com/32x24/it.png';
    expect(validUrl).toEqual(getFlagUrl('it'));
  });
});
