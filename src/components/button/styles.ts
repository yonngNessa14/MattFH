import {StyleSheet} from 'react-native';
import {color, family} from '@theme';

export default StyleSheet.create({
  containerSmall: {
    backgroundColor: color.palette.white,
    height: 34,
    width: 86,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  textSmall: {
    fontFamily: family.RobotoBold,
    fontSize: 14,
    color: color.primary,
  },
});
