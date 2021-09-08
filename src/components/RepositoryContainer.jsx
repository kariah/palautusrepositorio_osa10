import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryContainer = ({ repository }) => { 

    return (
        <View>
            <RepositoryItem item={repository} />
            <TouchableOpacity>
                <Text>Open in github</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RepositoryContainer;
