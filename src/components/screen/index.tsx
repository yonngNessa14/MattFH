import React, {FunctionComponent} from 'react';
import {ScrollView, ViewStyle, StyleSheet, View, FlatList} from 'react-native';
import styles from './styles';

type Props = {
  style?: ViewStyle;
  paddingHorizontal?: number;
  children?: React.ReactNode | React.ReactNode[];
  isFixed?: boolean;
  [x: string]: any;
};

export const Screen: FunctionComponent<Props> = ({
  style,
  paddingHorizontal = '7.5%',
  children,
  isFixed = false,
  ...otherProps
}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={StyleSheet.flatten([
        styles.contentContainer,
        {paddingHorizontal},
        style,
      ])}
      keyboardShouldPersistTaps={'never'}
      showsVerticalScrollIndicator={false}
      {...otherProps}>
      {children}
    </ScrollView>
  );
};
