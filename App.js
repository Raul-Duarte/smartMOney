if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react';

import Routes from './src/routes'

const App = () => {
  return <Routes />;
}

export default App;
