import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES} from '../graphql/queries';


const useRepositories = (variables) => { 
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

    const handleFetchMore = () => {
        //console.log('handleFetchMore')

        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
 
        if (!canFetchMore) {
            //console.log('!canFetchMore')
            return;
        } 

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