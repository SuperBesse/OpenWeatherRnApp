export const getFindCitiesUrl = (input: string, apiKey: string): string => {
  return `https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${apiKey}`;
};

export const getFlagUrl = (locale: string) => {
  return `https://flagcdn.com/32x24/${locale.toLowerCase()}.png`;
};
