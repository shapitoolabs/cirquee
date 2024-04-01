import { env } from '@/env';

import App from './App';

function Main() {
  return <App />;
}

let EntryPoint = Main;
if (env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  EntryPoint = require('../.storybook').default;
}

export default EntryPoint;
