import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgIcon} from '@components/svg-icon';
import styles from './styles';

export const Footer = () => {
  return (
    <View style={styles.footerWrapper}>
      <TouchableOpacity>
        <SvgIcon name="help" size={20} />
        <Text style={styles.tabTitle}>Wearables</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgIcon name="profile" size={20} />
        <Text style={styles.tabTitle}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgIcon name="help" size={20} />
        <Text style={styles.tabTitle}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};
