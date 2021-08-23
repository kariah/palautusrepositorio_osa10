// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main'; 

const App = () => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
};

export default App;
 