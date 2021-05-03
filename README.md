# OpenWeatherRnApp


OpenWeatherRnApp is an application for IOS and Android written in react-native. The main screen displays a list of cities with main data of current weather.
The data can be refreshed using a pull to refresh.

A settings screen adds the possibility to remove a city. Last screen is a search view to find and add cities.
Weather data are loaded from [openweathermap](https://openweathermap.org/)

![alt text](https://imagizer.imageshack.com/img923/7761/7FQhbf.png)



## Prerequisites
1. Node: run `brew install node`
2. Watchman: run `brew install watchman`
3. Cocoapods: run `sudo gem install cocoapods`
4. Java Development Kit: run `brew cask install adoptopenjdk/openjdk/adoptopenjdk8`

## Build instructions
1. Open the ```app``` directory
2. JS dependencies: run `yarn`. This should download dependencies.
3. Create a .env file and define the value of openweathermap api key (OPEN_WEATHERMAP_API_KEY = VALUE)
4. Run `npm start -- --reset-cache` to start the server to deliver the bundle url. Make sure this is running before you start your application. 
5. Run `cd ios && pod install && cd ..`
5. Run `react-native run-ios` or `react-native run-android` (or launch `OpenWeatherRNApp.xcworkspace` with xcode)

## Main used packages

redux-saga: ES6 generators for making asynchronous flows and managing Redux side effect manager
react-native-config: tools to configure environments var
jest: framework for tests
react-navigation: Routing and navigation for app screens
redux-persist: tools for saving some store and rehydrate it on lanunching
babel-plugin-module-resolver: tools for setuping custom alias for directories

## Next steps

- create a details screen for seeing more weather data
- can organize cities in settings screen
- use the locales for temperatures
- add permission to get current location
- use data for rain and snow
- add a theme and manage dark mode
- fix an issue when city's name is different from geoloc api and weather data api.
- fix import of react-navigation dependencies in test files
- Add tests for components render
