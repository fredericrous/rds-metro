const reactStrictBabelPreset = require('react-strict-dom/babel-preset')

module.exports = function (api) {
  api.cache(false);
  return {
    plugins: [],
    presets: [
      '@babel/preset-typescript',
      ['@babel/preset-react', { runtime: 'automatic' }],
      [reactStrictBabelPreset, { rootDir: process.cwd(), platform: 'native' }],
    ],
  };
};
