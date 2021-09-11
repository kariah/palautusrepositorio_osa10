import React from "react";
import useSignIn from "../../hooks/useSignIn";
import { useHistory } from "react-router-native";
import ReviewFormContainer from "../Review/ReviewFormContainer";

const ReviewForm = () => {
    const [signIn] = useSignIn();
    let history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });

            if (data.authorizedUser !== null) {
                history.push('/')
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
