
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
    },
    stretch: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
    },
});

const RepositoryItemImage = (props) => {

    const url = props.url;
    return (
        <View style={styles.container} >
            <Image
                style={styles.stretch}
                source={url}
            />
        </View>
    );
};

export default RepositoryItemImage;


