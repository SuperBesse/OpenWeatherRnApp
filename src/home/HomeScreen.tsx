import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppState} from 'configuration/reducers';
import {useSelector, shallowEqual} from 'react-redux';
import TopBarActions from 'home/TopBarActions';
import CityWidget from 'weather/components/CityWidget';

const styles = StyleSheet.create({
  actionsContainer: {
    alignItems: 'flex-start',
  },
});

const HomeScreen = () => {
  const weathers = useSelector((state: AppState) => {
    return state.weatherState.weathers;
  }, shallowEqual);

  console.log(weathers);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <TopBarActions style={styles.actionsContainer} />
      {weathers &&
        weathers.map(w => <CityWidget key={w.name} weatherData={w} />)}
    </View>
  );
};

export default HomeScreen;
