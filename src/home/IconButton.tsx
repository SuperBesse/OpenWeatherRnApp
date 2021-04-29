import React from 'react';
import {Image, TouchableOpacity, ImageStyle, StyleProp} from 'react-native';

interface IconButtonProps {
  icon: number;
  onPress: Function;
  style: StyleProp<ImageStyle>;
}

const IconButton = (props: IconButtonProps) => {
  const {icon, onPress, style} = props;
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image style={style} source={icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
