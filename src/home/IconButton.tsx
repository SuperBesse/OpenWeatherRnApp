import React from 'react';
import {Image, TouchableOpacity, ViewStyle, StyleProp} from 'react-native';

interface IconButtonProps {
  icon: number;
  onPress: Function;
  style: StyleProp<ViewStyle>;
}

const IconButton = (props: IconButtonProps) => {
  const {icon, onPress} = props;
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image source={icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
