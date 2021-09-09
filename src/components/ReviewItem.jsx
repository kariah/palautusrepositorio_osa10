import React from "react";
import { Text, View, StyleSheet } from "react-native";
//import theme from "../theme";

const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 20,
        backgroundColor: "#ecf0f1",
        padding: 20,
    },
    infocontainer: {
        flexGrow: 1,
        // alignItems: 'left'
    },
    bold: {
        fontWeight: "700",
    },
});

 
const ReviewItem = (item) => { 
    return (
        <> 
            <View style={itemStyles.container}>
                <View>
                    {item.review.rating}
                </View>
                <View style={itemStyles.container.infocontainer}>
                    <View style={itemStyles.container.infocontainer}>
                        <Text style={itemStyles.bold} testID="username">{item.review.user.username}</Text> 
                        <Text testID="text">{item.review.createdAt}</Text>
                        <Text testID="text">{item.review.text}</Text>
                    </View> 
                </View>
            </View> 
        </>
    );
};  

export default ReviewItem;
