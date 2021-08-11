import {Platform} from 'react-native';

/*
Available font weights

100 Thin
300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  RobotoBold: Platform.select({
    ios: 'Roboto-Bold', // The font family name
    android: 'Roboto-Bold', // The file name
  }),
  RobotoLight: Platform.select({
    ios: 'Roboto-Light', // The font family name
    android: 'Roboto-Light', // The file name
  }),
  RobotoMedium: Platform.select({
    ios: 'Roboto-Medium', // The font family name
    android: 'Roboto-Medium', // The file name
  }),
  RobotoRegular: Platform.select({
    ios: 'Roboto-Regular', // The font family name
    android: 'Roboto-Regular', // The file name
  }),
  RobotoSemiBold: Platform.select({
    ios: 'Roboto-SemiBold', // The font family name
    android: 'Roboto-SemiBold', // The file name
  }),
  RobotoThin: Platform.select({
    ios: 'Roboto-Thin', // The font family name
    android: 'Roboto-Thin', // The file name
  }),
};

export const size = {
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  h7: 12,
  h8: 10,
};
