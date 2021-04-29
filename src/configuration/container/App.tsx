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

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initApp());
    dispatch(fetchWeatherForCity('montpellier'));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
