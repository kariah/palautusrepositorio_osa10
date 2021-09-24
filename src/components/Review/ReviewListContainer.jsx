import React from "react";
import { StyleSheet, View, Text } from "react-native";   

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

const ReviewListContainer = () => {
    return ( 
        <View style={itemStyles.container}>
            <Text>TODO: My reviews</Text> 
        </View>
    );
};

export default ReviewListContainer;
