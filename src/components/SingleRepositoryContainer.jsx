import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import RepositoryItem from "./RepositoryItem";
import * as Linking from 'expo-linking';
import theme from "../theme";



const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 20,
        backgroundColor: "#ecf0f1",
        padding: 20,
    }, 
    bold: {
        fontWeight: "700",
    },
});

const SingleRepositoryContainer = ({ repository }) => {
    const openUrl = (url) => {
        Linking.openURL(url); 
    };

    return (
        <View style={itemStyles.container}>
            <RepositoryItem item={repository} />
            <View style={itemStyles.buttonContainer}>
                <TouchableOpacity onPress={() => openUrl(repository.url)}
                    style={theme.appButton.appButtonContainer} >
                    <Text style={theme.appButton.appButtonText}>
                        Open in GitHub
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SingleRepositoryContainer;
