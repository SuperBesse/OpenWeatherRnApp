import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from 'react-native-search-bar';

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
    backgroundColor: 'green',
    flex: 1,
  },
});

interface Props {}

const SearchScreen: React.FunctionComponent<Props> = () => {
  const _onSearchButtonPress = (input: string) => {
    //dispatch();
    console.log(input);
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
      <View style={styles.list} />
    </View>
  );
};

export default SearchScreen;
