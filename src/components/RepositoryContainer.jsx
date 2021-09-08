import React from "react";
import { View, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryContainer = ({ repository }) => { 

    return (
        <View>
            <RepositoryItem item={repository} />;
        </View>
    );
};

export default RepositoryContainer;
