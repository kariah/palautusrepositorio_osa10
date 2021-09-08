import {
    useQuery
} from '@apollo/client';
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => { 
    const { data, loading } = useQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: { id: id } 
    }); 

    return {
        repository: data?.repository, 
        loading 
    };
};

export default useRepository;