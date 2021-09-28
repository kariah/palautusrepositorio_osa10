import React from "react";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { format, parseISO } from 'date-fns'
import theme from "../../theme";
import { useHistory } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";

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
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        flexGrow: 1,
        paddingRight: 10
    },
});


const ReviewItem = (props) => {
    const review = props.review;
    const userId = props.userId
    const history = useHistory();
    const [deleteReview] = useDeleteReview();

    const deleteReviewPress = (id, userId) =>
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => doDeleteReview(id, userId) }
            ]
        );


     const doDeleteReview = async (id, userId) => { 
        try {
            let { data } = await deleteReview({ id });

            if (data.deleteReview === true) { 
                const url = `../reviews/${userId}`;
                history.push(url);
            }
        } catch (e) {
            console.log(e);
        }
    };


    const viewRepository = async () => {
        history.push(`/repository/${review.repositoryId}`)
    };

    return (
        <View style={itemStyles.container}>
            <View style={reviewItemStyles.container}>
                <View style={reviewItemStyles.ratingValueContainer}>
                    <View style={reviewItemStyles.ratingValueTextView}>
                        <Text style={reviewItemStyles.ratingValueText}>{review.rating}</Text>
                    </View>
                </View>
                <View >
                    <Text style={itemStyles.bold} testID="username">{review.user.username}</Text>
                    <Text style={reviewItemStyles.reviewText} testID="createdAt">{format(parseISO(review.createdAt), 'dd.MM.yyyy')}</Text>
                    <Text style={reviewItemStyles.reviewText} testID="text">{review.text}</Text>
                </View>
            </View>
            <View style={buttonStyles.container}>
                <View style={buttonStyles.button}>
                    <Pressable
                        onPress={viewRepository}
                        style={theme.appButton.appButtonContainer}
                    >
                        <Text style={theme.appButton.appButtonText}>View repository</Text>
                    </Pressable>
                </View>
                <View style={buttonStyles.button}>
                    <Pressable
                        onPress={() => deleteReviewPress(`${review.id}`, `${userId}`)}
                        style={theme.appButton.appButtonContainerRed}
                    >
                        <Text style={theme.appButton.appButtonText}>Delete review</Text>
                    </Pressable>
                </View>
            </View >
        </View >
    );
};

export default ReviewItem;
