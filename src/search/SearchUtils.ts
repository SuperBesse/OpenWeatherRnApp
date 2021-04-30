export const getFindCitiesUrl = (input: string, apiKey: string): string => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${apiKey}`;
};
