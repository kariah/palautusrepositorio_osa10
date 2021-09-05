import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'; 
import { useHistory } from 'react-router-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import {
    useQuery
} from '@apollo/client';
import {
    GET_AUTHORIZED_USER
} from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext'; 
const styles = StyleSheet.create({
    container: { 
        paddingTop: theme.appbar.paddingTop,
        paddingBottom: theme.appbar.paddingBottom,
        backgroundColor: theme.appbar.backgroundColor,
        color: theme.appbar.color,
        fontWeight: theme.appbar.fontWeight,
        flexDirection: 'row',
        flexGrow: 1,  
    },  
});
import { useContext } from 'react'; 
 

const AppBar = () => { 
    const authStorage = useContext(AuthStorageContext); 
 
    const signOut = async () => {    
        await authStorage.removeAccessToken();  
        history.go("/signin");
    };  

    const SignTab = () => {  
        const {
            data,
            error,
            loading
        } = useQuery(GET_AUTHORIZED_USER, {
            fetchPolicy: 'cache-and-network', 
        });

    
        if (loading)
        {
            return (<></>)
        };
 
        // if (data.authorizedUser != null)
        // {
        //     console.log('data GET_AUTHORIZED_USER', data.authorizedUser.id) 
        // }
        // else
        // {
        //     console.log('no authorized user ', data)
        // }
 
        if (data.authorizedUser === null || data.authorizedUser.id === null)
        {
            return (
                <AppBarTab to='/signin' text='Sign in'></AppBarTab>  
            );
        }
        else
        {
            return (
                <AppBarTab onPress={() => signOut()} text='Sign out'></AppBarTab>  
            );
        }
    };


    // return (
    //     <a onClick={() => signOut()} text='Sign out'>Sign out</a>  
    // );

    // return ( 
    //     <View> 
    //     <Link
    //       onClick={() => signOut()}
    //    >
    //        <Text style={styles.appBarTab}>Sign out</Text>
    //    </Link>
         
    //    </View>
    // );

    return (
        <>
            <View style={styles.container}>
                <ScrollView horizontal>
                    <AppBarTab to='/' text='Repositories'></AppBarTab>
                    <SignTab></SignTab>
                </ScrollView> 
            </View>
        </>
    );
};
 

export default AppBar;