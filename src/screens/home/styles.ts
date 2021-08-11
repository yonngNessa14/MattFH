import {StyleSheet, TextStyle} from 'react-native';
import {family, color} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: color.primary,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 20,
    elevation: 5,
  },
  cardTitle: {
    marginTop: 15,
    fontFamily: family.RobotoBold,
    fontSize: 25,
    color: color.textTitle,
  },
  cardSubtitle: {
    marginTop: 20,
    fontFamily: family.RobotoRegular,
    fontSize: 14,
    textAlign: 'center',
    color: color.textGrey,
    lineHeight: 19,
  },
});
