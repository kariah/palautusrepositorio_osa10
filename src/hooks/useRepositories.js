import {
    useState,
    useEffect
} from 'react';
import {
    useQuery
} from '@apollo/client';
import {
    GET_REPOSITORIES
} from '../graphql/queries';
 

const useRepositories = (sorting, searchKeyword) => {
    const [repositories, setRepositories] = useState();
    const {
        data,
        error,
        loading
    } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
            orderDirection: sorting.orderDirection,
            orderBy: sorting.orderBy,
            searchKeyword: searchKeyword
        }
    });

    // if (loading)
    // {
    //     console.log('loading ...')
    // }

    const fetchRepositories = async () => {  
        if (data) {   
            setRepositories(data.repositories);
        } 
    };

    useEffect(() => {
        if (data) {
            fetchRepositories();
        }
    }, [data]);

    return {
        repositories,
        loading,
        refetch: fetchRepositories
    };
};

export default useRepositories;