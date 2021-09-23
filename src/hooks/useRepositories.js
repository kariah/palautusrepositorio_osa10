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


const useRepositories = (variables) => {

    //console.log('variables ', variables);
    //console.log('sortOrder ', variables.sortOrder);
    //console.log('sortDirection ', variables.sortDirection);
    //console.log('searchKeyword ', variables.searchKeyword); 

    /* const [repositories, setRepositories] = useState();*/

    const {
        data,
        //error,
        loading,
        fetchMore,
        ...result
    } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: { 
            first: variables.first,
            orderBy: variables.sortOrder,
            orderDirection: variables.sortDirection,
            searchKeyword: variables.searchKeyword
        }
    }); 

    // if (loading)
    // {
    //     console.log('loading ...')
    // }

    //const fetchRepositories = async () => {
    //    if (data) {
    //        setRepositories(data.repositories);
    //    }
    //};

    //useEffect(() => {
    //    if (data) {
    //        fetchRepositories();
    //    }
    //}, [data]);

    const handleFetchMore = () => {
        console.log('handleFetchMore')

        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
 
        if (!canFetchMore) {
            console.log('!canFetchMore')
            return;
        }

        console.log('fetchMore')

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables,
            },
        });
    }; 
     
    return { 
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    };
};

export default useRepositories;