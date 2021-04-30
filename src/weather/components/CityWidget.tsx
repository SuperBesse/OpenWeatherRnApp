import React from 'react';
import {WeatherData} from 'weather/Types';
import {View, Text, StyleSheet, Image} from 'react-native';
import {formatTemperature, getIconImageUrl} from 'weather/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#989FB2',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
  },
  temperature: {
    color: 'white',
    fontSize: 16,
  },
  city: {
    color: 'white',
    fontSize: 16,
    marginTop: 12,
  },
  icon: {
    width: 80,
    height: 80,
  },
  column: {
    flexDirection: 'column',
    margin: 12,
  },
});

interface CityWidgetProps {
  weatherData: WeatherData;
}

const CityWidget = (props: CityWidgetProps) => {
  const {weatherData} = props;

  const _renderWeatherIcon = () => {
    if (weatherData.weather && weatherData.weather.length > 0) {
      const icon = weatherData.weather[0].icon;
      if (!icon) {
        return null;
      }
      return (
        <Image
          resizeMode={'cover'}
          source={{uri: getIconImageUrl(icon)}}
          style={styles.icon}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.temperature}>
          {formatTemperature(weatherData?.main?.temp)}
        </Text>
        <Text style={styles.city}>{weatherData.name}</Text>
      </View>
      {_renderWeatherIcon()}
    </View>
  );
};

export default CityWidget;
