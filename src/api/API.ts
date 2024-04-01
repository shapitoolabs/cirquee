import { env } from '@/env';

export const API_URL =
  env.EXPO_PUBLIC_APP_PROD === 'true'
    ? 'https://api.example.com/'
    : 'https://api-dev.example.com/';
