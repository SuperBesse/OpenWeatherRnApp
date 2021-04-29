import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppState} from 'configuration/reducers';
import {useSelector, shallowEqual} from 'react-redux';
import TopBarActions from 'home/TopBarActions';
import CityWidget from 'weather/components/CityWidget';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  ADD_CITY_SCREEN_NAME,
  SETTINGS_SCREEN_NAME,
} from 'configuration/container/App';
import {BACKGROUND_COLOR} from 'configuration/style/Theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  actionsContainer: {
    alignItems: 'flex-start',
  },
});

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const HomeScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  const weathers = useSelector((state: AppState) => {
    return state.weatherState.weathers;
  }, shallowEqual);

  console.log(weathers);

  const _addCityAction = () => {
    navigation.navigate(ADD_CITY_SCREEN_NAME);
  };

  const _settingsAction = () => {
    navigation.navigate(SETTINGS_SCREEN_NAME);
  };

  return (
    <View style={styles.mainContainer}>
      <TopBarActions
        style={styles.actionsContainer}
        onAddPress={_addCityAction}
        onSettingsPress={_settingsAction}
      />
      {weathers &&
        weathers.map(w => <CityWidget key={w.name} weatherData={w} />)}
    </View>
  );
};

export default HomeScreen;
