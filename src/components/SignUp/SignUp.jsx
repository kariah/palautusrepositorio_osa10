import React from "react";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";
import { useHistory } from "react-router-native";
import SignUpContainer from "./SignUpContainer";

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    let history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            console.log('values ', values);

            let { data } = await signUp({ username, password });  

            const id = data ? data.createUser.id : null;

            if (id != null) {
                data = await signIn({ username, password });  

                const authorize = data ? data.authorize : null;
                if (authorize !== null) { 
                    history.push('/')
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <SignUpContainer onSubmit={onSubmit}></SignUpContainer>
    );
};

export default SignUp;
