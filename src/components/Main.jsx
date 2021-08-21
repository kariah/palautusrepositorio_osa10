import React from 'react';
// import Constants from 'expo-constants';
import {  StyleSheet, View } from 'react-native'; 
import RepositoryList from './RepositoryList';  
import AppBar from './AppBar'; 


const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    paddingTop: 10
  },
});

const Main = () => {
  return (
    <>
      <View>
        <AppBar></AppBar>
      </View>

      
      <View style={styles.container}> 
        <RepositoryList></RepositoryList>
      </View>
    </>
  );
};

export default Main;