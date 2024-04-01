// load dot.env
require('dotenv').config();

// load env variables
const {
  EXPO_PUBLIC_APP_NAME,
  EXPO_PUBLIC_APP_SLUG,
  EXPO_EAS_PROJECT_ID,
  EXPO_PUBLIC_BUNDLE_IDENTIFIER_ANDROID,
  EXPO_PUBLIC_BUNDLE_IDENTIFIER_IOS,
  EXPO_PUBLIC_FONTS,
  EXPO_PUBLIC_APP_VERSION,
} = process.env;

// Android version number conversion
const parts = EXPO_PUBLIC_APP_VERSION.split('.');
const major = parts[0];
const minor = parts[1];
const patch = parts[2];
const versionNumber = major + minor + patch;
const EXPO_PUBLIC_APP_VERSION_ANDROID = Number(versionNumber);

module.exports = {
  name: EXPO_PUBLIC_APP_NAME,
  slug: EXPO_PUBLIC_APP_SLUG,
  version: EXPO_PUBLIC_APP_VERSION,
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    buildNumber: EXPO_PUBLIC_APP_VERSION,
    bundleIdentifier: EXPO_PUBLIC_BUNDLE_IDENTIFIER_IOS,
    supportsTablet: true,
    infoPlist: {
      UIViewControllerBasedStatusBarAppearance: true,
    },
  },
  android: {
    package: EXPO_PUBLIC_BUNDLE_IDENTIFIER_ANDROID,
    versionCode: EXPO_PUBLIC_APP_VERSION_ANDROID,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      'expo-font',
      {
        fonts: EXPO_PUBLIC_FONTS,
      },
    ],
  ],
  extra: {
    eas: {
      projectId: EXPO_EAS_PROJECT_ID,
    },
  },
};
