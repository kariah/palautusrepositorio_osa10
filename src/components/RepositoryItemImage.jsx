
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const repositoryItemImageStyles = StyleSheet.create({
    container: {
        paddingTop: 0,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden',
    },
});

const RepositoryItemImage = (props) => {

    const url = props.url;
    return (
        <View style={repositoryItemImageStyles.container} >
            <Image
                style={repositoryItemImageStyles.image} 
                source={{uri: url}}
            />
        </View>
    );
};

export default RepositoryItemImage;


