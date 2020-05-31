import React from 'react';
import 'react-native-gesture-handler';

import AppProvider from './hooks'
import Routes from './routes';

const App = () => {
  return (
    <AppProvider>
       <Routes />
    </AppProvider>
  );
};

export default App;
