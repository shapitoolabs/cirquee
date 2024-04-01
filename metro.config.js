/* eslint-disable no-undef */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { FileStore } = require('metro-cache');
const path = require('path');

const projectRoot = __dirname;

module.exports = (() => {
  /** @type {import('expo/metro-config').MetroConfig} */
  const config = getDefaultConfig(__dirname, {
    // [Web-only]: Enables CSS support in Metro.
    isCSSEnabled: true,
  });

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,

    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  config.resolver = {
    ...resolver,

    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),

    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  // Use turborepo to restore the cache when possible
  config.cacheStores = [
    new FileStore({
      root: path.join(projectRoot, 'node_modules', '.cache', 'metro'),
    }),
  ];

  // storybook
  config.transformer.unstable_allowRequireContext = true;

  return config;
})();
