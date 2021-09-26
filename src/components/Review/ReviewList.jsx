import React from "react"; 
import ReviewListContainer from "./ReviewListContainer"; 
import { View, Text } from "react-native";
import useAuthorizedUser from "../../hooks/useAuthorizedUser";

const ReviewList = () => {   
    const { data, loading } = useAuthorizedUser({ includeReviews: true });

    if (loading) {
        return <View><Text>loading ...</Text></View>;
    } 

    const reviewNodes = data
        ? data.authorizedUser.reviews.edges.map((edge) => edge.node)
        : []; 

    return <ReviewListContainer reviews={reviewNodes} />
    
};

export default ReviewList;
