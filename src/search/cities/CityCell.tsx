import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {CityResult} from '../Types';
import {getFlagUrl} from 'src/search/SearchUtils';
import IconButton from 'home/IconButton';
import {BACKGROUND_COLOR} from 'configuration/style/Theme';
import {useDispatch} from 'react-redux';
import {addCity} from 'home/CitiesActions';

interface Props {
  city: CityResult;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  city: {
    color: 'white',
    fontSize: 16,
    marginRight: 12,
    alignSelf: 'center',
  },
  flag: {
    width: 32,
    height: 24,
    alignSelf: 'center',
  },
  addContainer: {
    marginLeft: 12,
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  infoContainer: {
    backgroundColor: BACKGROUND_COLOR,
    marginVertical: 10,
    padding: 12,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  spacer: {
    flex: 1,
  },
});

const CityCell: React.FunctionComponent<Props> = props => {
  const {city} = props;
  const flagurl = getFlagUrl(city.country.toLowerCase());
  const dispatch = useDispatch();

  const _onAddPress = () => {
    dispatch(addCity(city.name));
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.city}>{city.name}</Text>
        <Image
          style={styles.flag}
          resizeMode={'cover'}
          source={{uri: flagurl}}
        />
        <View style={styles.spacer} />
        <IconButton
          style={styles.addContainer}
          icon={require('icons/icons8-add.png')}
          onPress={() => _onAddPress()}
        />
      </View>
    </View>
  );
};

export default CityCell;
