import React from 'react';
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import Repository from './Repository'; 

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1,
        flexShrink: 1,
        paddingTop: 10
    },
}); 

const Main = () => { 
    return (
        <>
            <AppBar></AppBar>
            <Switch> 
                <Route path="/signin">
                    <View style={styles.container}>
                        <SignIn />
                    </View>
                </Route>
                <Route path="/repository/:id">
                    <View style={styles.container}>
                        <Repository />
                    </View>
                </Route>
                <Route exact path="/">
                    <View style={styles.container}>
                        <RepositoryList></RepositoryList>
                    </View>
                </Route>
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default Main;
