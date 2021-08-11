import {StyleSheet, TextStyle} from 'react-native';
import {family, color} from '@theme';
import {scaleFont} from '@components';

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
  cardWrapper: {
    width: '90%',
    height: 300,
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 30,
    fontFamily: family.RobotoBold,
    fontSize: 25,
    color: color.textTitle,
    textAlign: 'center',
  },
  cardSubtitle: {
    marginTop: 20,
    fontFamily: family.RobotoRegular,
    fontSize: 14,
    textAlign: 'center',
    color: color.textGrey,
    lineHeight: 19,
  },
  profileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  productInfo: {
    marginTop: 10,
    height: 30,
    width: 180,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
  },
  profileText: {
    marginTop: 10,
    fontFamily: family.RobotoBold,
    fontSize: scaleFont(18),
    color: color.background,
  },
  stone: {
    width: '85%',
    position: 'absolute',
    top: -110,
  },
});
