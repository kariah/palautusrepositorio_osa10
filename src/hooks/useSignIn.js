import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

import createApolloClient from "../utils/apolloClient";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const apolloClient = createApolloClient(AuthStorageContext);

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);

    const [mutate, result] = useMutation(SIGN_IN);
     
    const signIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { credentials: { username, password } },
        });
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();

        return { data };
    };

    return [signIn, result];
};

export default useSignIn;
