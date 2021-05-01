import React from 'react';
import {Image, TouchableOpacity, ImageStyle, StyleProp} from 'react-native';

interface IconButtonProps {
  icon: number;
  onPress: Function;
  style: StyleProp<ImageStyle>;
  disabled: boolean;
}

const IconButton = (props: IconButtonProps) => {
  const {icon, onPress, style, disabled} = props;
  const opacity = disabled ? 0.2 : 1;
  return (
    <TouchableOpacity
      style={{opacity: opacity}}
      onPress={() => onPress()}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.2}>
      <Image style={style} source={icon} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  disabled: false,
};

export default IconButton;
