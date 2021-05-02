import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import {AppState} from 'configuration/reducers';
import {useSelector, shallowEqual} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  ADD_CITY_SCREEN_NAME,
  SETTINGS_SCREEN_NAME,
} from 'configuration/container/App';
import {BACKGROUND_COLOR} from 'configuration/style/Theme';
import {fetchWeatherDataForCities} from 'weather/Actions';
import TopBarActions from './TopBarActions';
import CityWidget from 'weather/components/CityWidget';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  actionsContainer: {
    alignItems: 'flex-start',
  },
  cityContainer: {
    marginHorizontal: 12,
    marginVertical: 6,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const HomeScreen: React.FunctionComponent<Props> = ({navigation}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const weathers = useSelector((state: AppState) => {
    return state.weatherState.weathers;
  }, shallowEqual);

  const cities = useSelector((state: AppState) => {
    if (state.weatherState.isLoading !== refreshing) {
      setRefreshing(state.weatherState.isLoading);
    }
    return state.citiesState.cities;
  });

  const _addCityAction = () => {
    navigation.navigate(ADD_CITY_SCREEN_NAME);
  };

  const _settingsAction = () => {
    navigation.navigate(SETTINGS_SCREEN_NAME);
  };

  const _onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchWeatherDataForCities(cities));
  };

  return (
    <View style={styles.mainContainer}>
      <TopBarActions
        style={styles.actionsContainer}
        onAddPress={_addCityAction}
        onSettingsPress={_settingsAction}
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            tintColor={'white'}
            refreshing={refreshing}
            onRefresh={_onRefresh}
          />
        }>
        {weathers &&
          weathers.map(w => (
            <CityWidget
              style={styles.cityContainer}
              key={w.name}
              weatherData={w}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
