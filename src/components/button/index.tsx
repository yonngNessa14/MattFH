import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  name: string;
  disabled?: boolean;
  onPress: () => void;
  [x: string]: any;
}

export const ButtonSmall = ({name, onPress, disabled}: Props) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={styles.containerSmall}>
    <Text style={styles.textSmall}>{name}</Text>
  </TouchableOpacity>
);
