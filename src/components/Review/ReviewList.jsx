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

    console.log('parameter id', id);
    console.log('authorizedUser', authorizedUser);

    return <ReviewListContainer />
    
};

export default ReviewList;
