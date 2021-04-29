import React from 'react';
import {WeatherData} from 'weather/Types';
import {View, StyleSheet} from 'react-native';
import CityWidget from './CityWidget';
import IconButton from 'home/IconButton';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteContainer: {
    marginLeft: 20,
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
});

interface CityCellProps {
  weatherData: WeatherData;
}

const DeleteCityCell: React.FunctionComponent<CityCellProps> = props => {
  const {weatherData} = props;

  const _onDeletePress = () => {

  };

  return (
    <View style={styles.container}>
      <CityWidget key={weatherData.name} weatherData={weatherData} />
      <IconButton
        style={styles.deleteContainer}
        icon={require('icons/icons8-delete_sign.png')}
        onPress={() => _onDeletePress()}
      />
    </View>
  );
};

export default DeleteCityCell;
