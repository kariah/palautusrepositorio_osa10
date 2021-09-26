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
 


const ReviewItem = (item) => {  
    const history = useHistory();
    const [deleteReview] = useDeleteReview();

   /* console.log('item.review.id ', item.review.id);*/

    //const deleteReview = () =>
    //    Alert.alert(
    //        "Delete review",
    //        "Are you sure you want to delete this review",
    //        [
    //            {
    //                text: "Cancel",
    //                onPress: () =>
    //                    console.log("Cancel Pressed"),
    //                style: "cancel"
    //            },
    //            {
    //                text: "Delete",
    //                onPress: () => console.log("OK Pressed")
    //            }
    //        ]
    //    );

    const deleteReviewPress = async (id) => {
        //TODO poisto
        console.log('deleteReview ', id)
    };

    //const onSubmit = async (values) => {
    //    const {
    //            repositoryName,
    //            ownerName,
    //            rating,
    //            text
    //        }
    //        = values;

    //    console.log('repositoryName ', repositoryName);

    //    try {
    //        const { data } = await createReview({
    //            repositoryName,
    //            ownerName,
    //            rating,
    //            text
    //        });

    //        if (data !== null) {
    //            history.push(`/repository/${values.ownerName}.${values.repositoryName}`);
    //        }
    //    } catch (e) {
    //        console.log(e);
    //    }
    //}; 

    const viewRepository = async () => { 
        history.push(`/repository/${item.review.repositoryId}`) 
    };

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
                        onPress={() => deleteReviewPress(`${item.review.id}`)}
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
