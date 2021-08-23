import React from 'react';
import { View, StyleSheet } from 'react-native'; 
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
        justifyContent: 'space-around',
    }, 
    tab: {   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center' 
    }, 
});

const AppBar = () => {
    return (
        <> 
            <View style={styles.container}>
                <AppBarTab style={styles.tab} to='/' text='Repositories'></AppBarTab>
                <AppBarTab style={styles.tab} to='/signin' text='Sign in'></AppBarTab>
                {/* <Pressable
                    onPress={() => console.log('You pressed Repositories')}>
                    <Text style={styles.appBar}>Repositories</Text>
                </Pressable> */}
            </View>
        </>
    );
};

export default AppBar;