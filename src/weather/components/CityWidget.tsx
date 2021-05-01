import React from 'react';
import {WeatherData} from 'weather/Types';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {formatTemperature, getIconImageUrl} from 'weather/utils';
import {getFlagUrl} from 'src/search/SearchUtils';

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
    marginBottom: 12,
  },
  icon: {
    width: 80,
    height: 80,
  },
  column: {
    flexDirection: 'column',
    margin: 12,
  },
  spacer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  flag: {
    width: 16,
    height: 12,
    marginLeft: 4,
  },
});

interface CityWidgetProps {
  weatherData: WeatherData;
  style?: StyleProp<ViewStyle>;
}

const CityWidget = (props: CityWidgetProps) => {
  const {weatherData} = props;
  const flagUrl = getFlagUrl(weatherData.sys.country.toLowerCase());

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
    <View style={[props.style, styles.container]}>
      <View style={styles.column}>
        <Text style={styles.temperature}>
          {formatTemperature(weatherData?.main?.temp)}
        </Text>
        <View style={styles.row}>
          <Text style={styles.city}>{weatherData.name}</Text>
          <Image
            style={styles.flag}
            resizeMode={'cover'}
            source={{uri: flagUrl}}
          />
        </View>
      </View>
      <View style={styles.spacer} />
      {_renderWeatherIcon()}
    </View>
  );
};

export default CityWidget;
