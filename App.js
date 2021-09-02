// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter } from 'react-router-native'; 
import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main'; 
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {  
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
          <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
 