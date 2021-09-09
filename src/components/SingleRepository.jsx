import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import SingleRepositoryContainer from "./SingleRepositoryContainer.jsx";
import ReviewItem from "./ReviewItem.jsx";
import useRepository from "../hooks/useRepository";
import { useParams } from "react-router";


const styles = StyleSheet.create({
    separator: {
        height: 10,
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

//const ReviewItem = ({ review }) => {
//    console.log("review ", review);

//    return (
//        <View>
//            <Text>{review.createdAt}</Text>
//        </View>
//    );
//};

const SingleRepository = () => {
    let { id } = useParams();

    const { repository, loading } = useRepository(id);

    if (loading) {
        return <Text>loading ...</Text>
    }

    const reviews = repository
        ? repository.reviews.edges.map((edge) => edge.node)
        : [];

    //console.log('reviews ', reviews); 

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        />
    );
};


export default SingleRepository;
