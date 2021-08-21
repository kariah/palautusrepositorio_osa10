import React from 'react';
import { Text, View } from 'react-native';

const RepositoryItem = (repository) => {  
    // console.log('repository ', repository.item); 

    return (
        <View>
            <Text>Full name: {repository.item.fullName}</Text> 
            <Text>Description: {repository.item.description}</Text> 
            <Text>Language: {repository.item.language}</Text> 
            <Text>Forks: {repository.item.forksCount}</Text>  
            <Text>Stars: {repository.item.stargazersCount}</Text> 
            <Text>Rating: {repository.item.ratingAverage}</Text> 
            <Text>Reviews: {repository.item.reviewCount}</Text> 
            {/* <Text>ownerAvatarUrl: {repository.item.ownerAvatarUrl}</Text>  */}
        </View>
    );
};

export default RepositoryItem; 
 