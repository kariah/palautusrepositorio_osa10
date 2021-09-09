import React from "react";
import { View, Text } from "react-native";
import SingleRepositoryContainer from "./SingleRepositoryContainer.jsx";
import useRepository from "../hooks/useRepository";
import { useParams } from "react-router";

const SingleRepository = () => {
    let { id } = useParams();

    const { repository, loading } = useRepository(id);
     
    if (loading) {
        return <Text>loading ...</Text>
    } 

    return (
        <View>
            <SingleRepositoryContainer repository={repository}></SingleRepositoryContainer>
        </View>
    );
};


export default SingleRepository;
