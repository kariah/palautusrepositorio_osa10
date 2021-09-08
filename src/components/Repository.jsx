import React from "react";
import { View, Text } from "react-native";
import RepositoryContainer from "./RepositoryContainer.jsx";
import useRepository from "../hooks/useRepository";
import { useParams } from "react-router";

const Repository = () => {   
    let { id } = useParams();

    const { repository } = useRepository(id); 

    console.log('repository after useRepository ', repository)

    return (
        <View>
            <RepositoryContainer repository={repository}></RepositoryContainer>
        </View>
    );
};


export default Repository;
