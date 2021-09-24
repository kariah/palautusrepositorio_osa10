import React from 'react'; 
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './Repository/RepositoryList';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import AppBar from './AppBar/AppBar';
import SingleRepository from './Repository/SingleRepository';
import ReviewForm from './Review/ReviewForm';
import ReviewList from './Review/ReviewList';

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1,
        flexShrink: 1,
        zIndex: 0,
        /*paddingTop: 10*/
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
                <Route path="/signup">
                    <View style={styles.container}>
                        <SignUp />
                    </View>
                </Route> 
                <Route path="/reviews/:id">
                    <ReviewList />
                </Route>
                <Route path="/review">
                    <ReviewForm />
                </Route>
                <Route path="/repository/:id">
                    <View style={styles.container}>
                        <SingleRepository />
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
