import {
    useState,
    useEffect
} from 'react';
import {
    useQuery
} from '@apollo/client';
import {
    GET_REPOSITORY,
    GET_REPOSITORIES
} from '../graphql/queries';


const useRepository = (id) => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables: { id: id } 
    });

    console.log('id ', id);
    console.log('data ', data); 

    return {
        data,
        loading
    };

    //const [repository, setRepository] = useState(); 

    //console.log("useRepository Id:", id);

    //const {
    //    data,
    //    error,
    //    loading
    //} = useQuery(GET_REPOSITORY, {
    //    fetchPolicy: 'cache-and-network',
    //    variables: { id: id } 
    //});

    //if (loading) { console.log("loading ") };
     
    //const fetchRepository = async () => { 
    //    if (data) {
    //        setRepository(data.repository);
    //    } 
    //}; 
   
    //useEffect(() => { 
    //    if (data) {
    //        fetchRepository();
    //    } 
    //}, [data]);
     
    //console.log('data ', data)
    
    //return {
    //    repository,
    //    loading,
    //    refetch: fetchRepository
    //};
};

export default useRepository;

