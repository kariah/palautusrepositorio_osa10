import React from "react";
import useReview from "../../hooks/useReview";
import { useHistory } from "react-router-native";
import ReviewFormContainer from "../Review/ReviewFormContainer";

const ReviewForm = () => {
    const [createReview] = useReview();
    let history = useHistory();

    const onSubmit = async (values) => { 
        const {
            repositoryName,
            ownerName,
            rating,
            text
        }
            = values;
         
        console.log('repositoryName ', repositoryName);

        try { 
            const { data } = await createReview({
                repositoryName,
                ownerName,
                rating,
                text
            }); 

            if (data !== null) {
                history.push(`/repository/${values.ownerName}.${values.repositoryName}`);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ReviewFormContainer onSubmit={onSubmit}></ReviewFormContainer>
    );
};

export default ReviewForm;
