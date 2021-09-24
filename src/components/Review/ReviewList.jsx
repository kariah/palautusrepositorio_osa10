import React from "react"; 
import ReviewListContainer from "./ReviewListContainer";
import { useParams } from "react-router";

const ReviewList = () => { 
    let { id } = useParams();

    console.log('parameter id', id);

    return <ReviewListContainer />
    
};

export default ReviewList;
