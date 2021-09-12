import React from "react";
import useSignIn from "../../hooks/useSignIn";
import { useHistory } from "react-router-native";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
    const [signIn] = useSignIn();
    let history = useHistory();  

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });

            const authorize = data ? data.authorize : null;
            if (authorize !== null) {
                history.push('/')
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <SignInContainer onSubmit={onSubmit}></SignInContainer>
    );
};

export default SignIn;
