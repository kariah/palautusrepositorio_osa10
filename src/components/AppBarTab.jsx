import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
 
const styles = StyleSheet.create({
    appBarTab: { 
        color: theme.appbar.color,
        fontWeight: theme.appbar.fontWeight
    }, 
});
const AppBarTab = (props) => {   
    const text = props.text;

    return (
        <View>
            <Pressable
                    onPress={() => console.log('You pressed Repositories')}>
                    <Text style={styles.appBarTab}>{text}</Text>
                </Pressable>
        </View>
    );
};

// style={styles.appBar}
export default AppBarTab; 
 