import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";
import { useState, useEffect} from 'react';

const useAuthorizedUser = (variables) => { 
    //let fetchPolicy = 'cache-and-network';

    ////Halutaan että lisätyt reviewt päivittyy
    //if (variables.includeReviews === true) {
    //    fetchPolicy = 'network-only'
    //}

    const {
        data,
        error,
        loading
    } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'network-only',
        variables: {
            includeReviews: variables.includeReviews
        }
    });

    //if (loading) {
    //    console.log('loading (useAuthorizedUser) ...')
    //} 
    
    return {
        data,
        loading,
        //refetch: fetchRepositories
    }; 
};

export default useAuthorizedUser;
