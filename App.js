if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react';
import { View } from 'react-native';

import Main from './src/pages/Main'
import NewEntry from './src/pages/NewEntry';
import Report from './src/pages/Report'

const App = () => {
  return <Report />;
}

export default App;
