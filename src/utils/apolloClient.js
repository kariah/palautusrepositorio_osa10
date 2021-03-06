import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = createHttpLink({
    // Replace the IP address part with your own IP address!
    // uri: 'http://172.27.1.103:5000/graphql',
    uri: Constants.manifest.extra.serviceUri
});

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                repositories: relayStylePagination()
            }
        },
        Repository: {
            fields: {
                reviews: relayStylePagination()
            }
        },
        User: {
            fields: {
                reviews: relayStylePagination()
            }
        }
    }
});


const createApolloClient = (authStorage) => {

    const authLink = setContext(async (_, { headers }) => {
        try {
            const accessToken = await authStorage.getAccessToken();

            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : '',
                },
            };
        } catch (e) {
            console.log(e);
            return {
                headers,
            };
        }
    });
    return new ApolloClient({
        link: authLink.concat(httpLink), 
        cache: cache
    });
};

export default createApolloClient;