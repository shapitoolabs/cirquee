import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

// LOAD FONTS
const fontFiles = require.context('../assets/fonts', true, /\.(ttf|otf)$/);
const fontNames = fontFiles
  .keys()
  .map((file) => file.replace('./', './assets/fonts/'));

export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: 'EXPO_PUBLIC_',
  isServer: true, // Bypass server-side checks
  client: {
    EXPO_PUBLIC_APP_NAME: z.string().min(1),
    EXPO_PUBLIC_APP_SLUG: z.string().min(1),
    EXPO_PUBLIC_STORYBOOK_ENABLED: z.union([
      z.literal('true'),
      z.literal('false'),
    ]),
    EXPO_PUBLIC_EAS_PROJECT_ID: z.string().min(1),
    EXPO_PUBLIC_BUNDLE_IDENTIFIER_ANDROID: z.string().min(1),
    EXPO_PUBLIC_BUNDLE_IDENTIFIER_IOS: z.string().min(1),
    EXPO_PUBLIC_FONTS: z.array(z.string()).default(fontNames),
    EXPO_PUBLIC_DEFAULT_LANGUAGE: z.string().min(1).max(2),
    EXPO_PUBLIC_APP_VERSION: z.string().min(1),
    EXPO_PUBLIC_APP_PROD: z.union([z.literal('true'), z.literal('false')]),
  },

  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnv: process.env,
});
