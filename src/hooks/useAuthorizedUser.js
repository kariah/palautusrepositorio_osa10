import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";
import { useState, useEffect} from 'react';

const useAuthorizedUser = (variables) => {  
    const {
        data,
        error,
        loading
    } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
        variables: {
            includeReviews: variables.includeReviews
        }
    });

    if (loading) {
        console.log('loading (useAuthorizedUser) ...')
    } 

    console.log('data ', data)
    console.log('variables.includeReviews ', variables.includeReviews)

    return {
        data,
        loading,
        //refetch: fetchRepositories
    }; 
};

export default useAuthorizedUser;
