import React from 'react';
import { Text, View } from 'react-native';

const RepositoryItem = (item) => {  
    // console.log('repository ', item.item); 
 
    return (
        <View>
            <Text>Full name: {item.item.fullName}</Text> 
            <Text>Description: {item.item.description}</Text> 
            <Text>Language: {item.item.language}</Text> 
            <Text>Forks: {item.item.forksCount}</Text>  
            <Text>Stars: {item.item.stargazersCount}</Text> 
            <Text>Rating: {item.item.ratingAverage}</Text> 
            <Text>Reviews: {item.item.reviewCount}</Text> 
            {/* <Text>ownerAvatarUrl: {item.item.ownerAvatarUrl}</Text>  */}
        </View>
    );
};

export default RepositoryItem; 
 