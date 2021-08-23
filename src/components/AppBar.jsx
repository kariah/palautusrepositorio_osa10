import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'; 
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
    container: { 
        paddingTop: theme.appbar.paddingTop,
        paddingBottom: theme.appbar.paddingBottom,
        backgroundColor: theme.appbar.backgroundColor,
        color: theme.appbar.color,
        fontWeight: theme.appbar.fontWeight,
        flexDirection: 'row',
        flexGrow: 1, 
        // justifyContent: 'space-around',
    },  
});

const AppBar = () => {
    return (
        <>
            <View style={styles.container}>
                <ScrollView horizontal>
                    <AppBarTab to='/' text='Repositories'></AppBarTab>
                    <AppBarTab to='/signin' text='Sign in'></AppBarTab>  
                </ScrollView> 
            </View>
        </>
    );
};
 
export default AppBar;