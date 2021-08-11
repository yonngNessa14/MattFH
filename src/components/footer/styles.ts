import {StyleSheet} from 'react-native';
import {color, family} from '@theme';

export default StyleSheet.create({
  footerWrapper: {
    width: '80%',
    marginBottom: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabTitle: {
    fontFamily: family.RobotoRegular,
    fontSize: 12,
    marginTop: 8,
  },
});
