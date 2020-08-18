module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babe;-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
