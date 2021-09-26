import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { format, parseISO } from 'date-fns'   

const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center", 
        paddingTop: 20,
        padding: 20,
        paddingRight: 100
    },
    bold: {
        fontWeight: "700",
    },
});

const reviewItemStyles = StyleSheet.create({
    container: {
        flexDirection: "row", 
    },
    ratingValueContainer: {
        flexGrow: 0,
        paddingRight: 20,
    },
    ratingValueTextView: {
        backgroundColor: '#fff',
        borderWidth: 2,
        width: 58,
        height: 58,
        borderRadius: 58 / 2,
        borderColor: "#3467eb",
        padding: 5,
    },
    ratingValueText: {
        textAlign: 'center',
        color: "#3467eb",
        padding: 10
    },
    reviewText: {
        paddingTop: 5
    },
});

const buttonStyles = StyleSheet.create({ 
    container: {
        flexDirection: "row",
        flexGrow: 0,
        paddingTop: 20,
        paddingBottom: 20,
    },
    info: {
    },
});

const ReviewItem = (item) => {
    return (
        <View style={itemStyles.container}>
            <View style={reviewItemStyles.container}>
                <View style={reviewItemStyles.ratingValueContainer}>
                    <View style={reviewItemStyles.ratingValueTextView}>
                        <Text style={reviewItemStyles.ratingValueText}>{item.review.rating}</Text>
                    </View>
                </View>
                <View >
                    <Text style={itemStyles.bold} testID="username">{item.review.user.username}</Text>
                    <Text style={reviewItemStyles.reviewText} testID="createdAt">{format(parseISO(item.review.createdAt), 'dd.MM.yyyy')}</Text>
                    <Text style={reviewItemStyles.reviewText} testID="text">{item.review.text}</Text>
                </View>
            </View>
            <View>
                <Text>TODO: Toimintopainikkeet</Text>
            </View>
        </View>
    );
};


//<View style={buttonStyles.container}>
//    <AppButton
//        title={item.item.language}
//        onPress={() => console.log("Button pressed")}
//        testID="language"
//    />
//</View>

export default ReviewItem;
