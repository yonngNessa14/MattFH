module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@images': './assets/images',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@components': './src/components',
        },
      },
    ],
  ],
};
