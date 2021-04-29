module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js', '.png', 'ts', 'tsx'],
        alias: {
          configuration: './src/configuration',
          weather: './src/weather',
          home: './src/home',
          settings: './src/settings',
          icons: './icons',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
