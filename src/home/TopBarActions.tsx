import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import IconButton from './IconButton';

const styles = StyleSheet.create({
  iconContainer: {
    overflow: 'hidden',
    marginRight: 8,
  },
  icon: {
    flexGrow: 1,
    width: 25,
    height: 25,
  },
  rowContainer: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  spacer: {
    flex: 1,
  },
});

interface TopBarActionsProps {
  onAddPress: Function;
  onSettingsPress: Function;
  style: StyleProp<ViewStyle>;
}

const TopBarActions = (props: TopBarActionsProps) => {
  const {onAddPress, onSettingsPress, style} = props;
  return (
    <View style={[style, styles.rowContainer]}>
      <IconButton
        style={styles.iconContainer}
        icon={require('icons/icons8-settings_filled.png')}
        onPress={onSettingsPress}
      />
      <View style={styles.spacer} />
      <IconButton
        style={styles.iconContainer}
        icon={require('icons/icons8-add.png')}
        onPress={onAddPress}
      />
    </View>
  );
};

export default TopBarActions;
