/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {initApp} from 'configuration/actions/AppActions';
import {fetchWeatherForCity} from 'weather/Actions';
import HomeScreen from 'home/HomeScreen';
import SettingsScreen from 'settings/SettingsScreen';
import {BACKGROUND_COLOR} from 'configuration/style/Theme';

export const HOME_SCREEN_NAME = 'Home';
export const ADD_CITY_SCREEN_NAME = 'AddCity';
export const SETTINGS_SCREEN_NAME = 'Settings';

const Stack = createStackNavigator();

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initApp());
    dispatch(fetchWeatherForCity('montpellier'));
  }, [dispatch]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen
            name={HOME_SCREEN_NAME}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ADD_CITY_SCREEN_NAME}
            component={SettingsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SETTINGS_SCREEN_NAME}
            component={SettingsScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
