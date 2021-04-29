import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppState} from 'configuration/reducers';
import {useSelector, shallowEqual} from 'react-redux';
import DeleteCityCell from 'weather/components/DeleteCityCell';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

interface Props {}

const SettingsScreen: React.FunctionComponent<Props> = () => {
  const weathers = useSelector((state: AppState) => {
    return state.weatherState.weathers;
  }, shallowEqual);

  return (
    <View style={styles.mainContainer}>
      {weathers &&
        weathers.map(w => <DeleteCityCell key={w.name} weatherData={w} />)}
    </View>
  );
};

export default SettingsScreen;
