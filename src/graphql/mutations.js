import { gql } from '@apollo/client'
import { REVIEW_INFO } from "./fragments";


export const SIGN_IN = gql`
  mutation authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
       ...ReviewInfo
    }
  }
${REVIEW_INFO}
`;

//export const CREATE_REVIEW = gql`
// mutation  {
//    createReview(
//      review: {
//        repositoryName: "formik"
//        ownerName: "jaredpalmer"
//        rating: 20
//        text: "ok"
//      }
//    )
//    {
//       ...ReviewInfo
//    }
//  }
//${REVIEW_INFO}
//`;

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
       id
       username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;