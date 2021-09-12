import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

//import createApolloClient from "../utils/apolloClient";
//import { useContext } from "react";
//import AuthStorageContext from "../contexts/AuthStorageContext";

/*const apolloClient = createApolloClient(AuthStorageContext);*/

const useSignUp = () => {
    /*const authStorage = useContext(AuthStorageContext);*/ 
    const [mutate, result] = useMutation(CREATE_USER);

    const signUp = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { user: { username, password } },
        });
        //await authStorage.setAccessToken(data.authorize.accessToken);
        //apolloClient.resetStore();

        return { data };
    };

    return [signUp, result];
};

export default useSignUp;
