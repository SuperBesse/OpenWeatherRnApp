/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {initApp} from 'configuration/actions/AppActions';
import {loadWeatherTest} from 'weather/Actions';
import {AppState} from 'configuration/reducers';

const HomeScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initApp());
    dispatch(loadWeatherTest());
  }, []);

  const weathers = useSelector((state: AppState) => {
    return state.weatherState.weathers;
  }, shallowEqual);

  console.log(weathers);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
