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
        fontWeight: theme.appbar.fontWeight
    }, 
});

const AppBar = () => {
    return (
        <> 
            <View style={styles.container}>
                <AppBarTab text='Repositories'></AppBarTab>
                {/* <Pressable
                    onPress={() => console.log('You pressed Repositories')}>
                    <Text style={styles.appBar}>Repositories</Text>
                </Pressable> */}
            </View>
        </>
    );
};

export default AppBar;