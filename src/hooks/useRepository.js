import {
    useQuery
} from '@apollo/client';
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => { 
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: { 
            first: variables.first,
            id: variables.id
        }
    });   

    const handleFetchMore = () => {
        //console.log('handleFetchMore')

        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            //console.log('!canFetchMore')
            return;
        }
         

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };


    return {
        repository: data?.repository,
        fetchMore: handleFetchMore, 
        loading,
        ...result,
    };
};

export default useRepository;