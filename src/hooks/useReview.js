import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW); 
    
    const createReview = async ({
        repositoryName,
        ownerName,
        rating,
        text
    }) => {
        const { data } = await mutate({
            variables: {
                review: {
                    repositoryName,
                    ownerName,
                    rating: Number(rating),
                    text
                }
            },
        });

        console.log('data (createReview) ', data);

        return { data };
    };

    return [createReview, result];
};

export default useReview;
