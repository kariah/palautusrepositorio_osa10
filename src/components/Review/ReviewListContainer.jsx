import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ReviewItem from "../Review/ReviewItem.jsx";

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: "#ecf0f1"
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewListContainer = ({ reviews }) => {  
    return ( 
        <View style={{ flex: 1 }}>
            <FlatList
                data={reviews}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}  
            />
        </View>
    );
};

export default ReviewListContainer;
