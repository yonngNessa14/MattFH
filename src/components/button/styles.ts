import {StyleSheet} from 'react-native';
import {color, family} from '@theme';

export default StyleSheet.create({
  containerSmall: {
    backgroundColor: color.primary,
    height: 30,
    width: 83,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSmall: {
    fontFamily: family.RobotoBold,
    fontSize: 14,
    color: color.background,
  },
});
