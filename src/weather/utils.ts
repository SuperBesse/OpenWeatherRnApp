export const formatTemperature = (temp: number): string => {
  return temp.toFixed(1) + '°C';
};

export const getIconImageUrl = (iconId: string): string => {
  return `https://openweathermap.org/img/w/${iconId}.png`;
};

export const getWeatherUrlForCity = (
  cityName: string,
  apiKey: string,
): string => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
};
