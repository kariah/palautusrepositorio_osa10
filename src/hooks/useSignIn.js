import {
    useMutation
} from '@apollo/client';
import { 
    SIGN_IN
} from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';
import createApolloClient from '../utils/apolloClient'; 

const apolloClient = createApolloClient();

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);

    const signIn = async ({
        username,
        password
    }) => {    
        const  { data  }= await mutate({ variables: { credentials: { username, password }}}); 

        // console.log('data.authorize.accessToken: ', data.authorize.accessToken);
        
        const authStorage = new AuthStorage();
        await authStorage.setAccessToken(data.authorize.accessToken);
 
        apolloClient.resetStore(); 
    };

    return [signIn, result];
};

export default useSignIn;

