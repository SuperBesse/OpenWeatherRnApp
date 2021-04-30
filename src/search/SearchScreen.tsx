import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from 'react-native-search-bar';
import {searchCity} from './SearchActions';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {AppState} from 'configuration/reducers';
import CityCell from './cities/CityCell';
import {CityResult} from './Types';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    height: 60,
    margin: 12,
  },
  list: {
    backgroundColor: 'white',
    flex: 1,
  },
});

interface Props {}

const SearchScreen: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const _onSearchButtonPress = (input: string) => {
    dispatch(searchCity(input));
    console.log(input);
  };

  const cities = useSelector((state: AppState) => {
    return state.searchState.results;
  }, shallowEqual);

  const _displayResult = () => {
    if (!cities) {
      return null;
    }
    return (
      <View style={styles.list}>
        {cities.map((c: CityResult) => (
          <CityCell key={c.name} city={c} />
        ))}
      </View>
    );
  };

  const searchBarRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <SearchBar
        ref={searchBarRef}
        placeholder="Search"
        style={styles.searchBar}
        onSearchButtonPress={(t: string) => _onSearchButtonPress(t)}
      />
      {_displayResult()}
    </View>
  );
};

export default SearchScreen;
