import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import SingleRepositoryContainer from "./SingleRepositoryContainer.jsx";
import ReviewItem from "../Review/ReviewItem.jsx";
import useRepository from "../../hooks/useRepository";
import { useParams } from "react-router";


const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: "#ecf0f1"
    },
});

const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryInfo = ({ repository }) => {
    return (
        <View>
            <SingleRepositoryContainer repository={repository}></SingleRepositoryContainer>
        </View>
    );
};


const SingleRepository = () => {
    let { id } = useParams();

    const { repository, loading, fetchMore } = useRepository({ first: 2, id: id });

    if (loading) {
        return <Text>loading ...</Text>
    }

    const reviews = repository
        ? repository.reviews.edges.map((edge) => edge.node)
        : [];

    const onEndReach = () => {
        //console.log('onEndReach');

        fetchMore();
    };   
     
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={reviews}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
                onEndReached={onEndReach}  
                onEndReachedThreshold={0.5} 
            />
        </View>
    );
};


export default SingleRepository;
