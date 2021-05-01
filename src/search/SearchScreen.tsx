import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from 'react-native-search-bar';
import {searchCity} from './SearchActions';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {AppState} from 'configuration/reducers';
import CityCell from './cities/CityCell';
import {CityResult} from './Types';
import {MODAL_BACKGROUND_COLOR} from 'configuration/style/Theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: MODAL_BACKGROUND_COLOR,
  },
  searchBar: {
    height: 60,
    margin: 12,
  },
  list: {
    backgroundColor: MODAL_BACKGROUND_COLOR,
    flex: 1,
  },
});

interface Props {}

const SearchScreen: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const _onSearchButtonPress = (input: string) => {
    dispatch(searchCity(input));
  };

  const [input, setInput] = useState('');
  const _onChangeText = (text: string) => {
    setInput(text);
  };
  const foundCities = useSelector((state: AppState) => {
    const searchState = state.searchState;
    if (input === searchState.input) {
      return searchState.results;
    }
    return [];
  }, shallowEqual);

  const savedCities = useSelector((state: AppState) => {
    return state.citiesState.cities;
  }, shallowEqual);

  const _displayResult = () => {
    if (!foundCities) {
      return null;
    }
    return (
      <View style={styles.list}>
        {foundCities.map((c: CityResult) => (
          <CityCell
            key={c.name}
            city={c}
            disabledAddButton={savedCities.includes(c.name)}
          />
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
        onChangeText={_onChangeText}
      />
      {_displayResult()}
    </View>
  );
};

export default SearchScreen;
