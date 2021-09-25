import React from "react"; 
import ReviewListContainer from "./ReviewListContainer";
import { useParams } from "react-router";  
import useAuthorizedUser from "../../hooks/useAuthorizedUser";

const ReviewList = () => { 
    let { id } = useParams();
     
    const { data, loading } = useAuthorizedUser({ includeReviews: true });

    if (loading) {
        return <>loading ...</>;
    }

    const authorizedUser = data ? data.authorizedUser : null;

    const reviewNodes = data
        ? data.authorizedUser.reviews.edges.map((edge) => edge.node)
        : []; 

    return <ReviewListContainer reviews={reviewNodes} />
    
};

export default ReviewList;
