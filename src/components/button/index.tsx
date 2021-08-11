import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  name: string;
  marginBottom?: number;
  disabled?: boolean;
  onPress: () => void;
  [x: string]: any;
}

export const ButtonSmall = ({name, onPress, disabled, marginBottom}: Props) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[styles.containerSmall, {marginBottom}]}>
    <Text style={styles.textSmall}>{name}</Text>
  </TouchableOpacity>
);
