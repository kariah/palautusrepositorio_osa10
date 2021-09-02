import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from '@apollo/client';
import Constants from 'expo-constants';

const httpLink = createHttpLink({
    // Replace the IP address part with your own IP address!
    // uri: 'http://172.27.1.103:5000/graphql',
    uri: Constants.manifest.extra.serviceUri
});


const createApolloClient = () => {

    // console.log('Constants.manifest.extra.serviceUri ', Constants.manifest.extra.serviceUri);

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;