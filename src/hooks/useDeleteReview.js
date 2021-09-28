import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW); 

    const deleteReview = async ({
        id
    }) => {
        const { data } = await mutate({
            variables: {
               id: id
            }, refetchQueries: () => { query: GET_AUTHORIZED_USER }
        }); 

        console.log('data (deleteReview) ', data);

        return { data };
    }; 

    return [deleteReview, result];
};

export default useDeleteReview;