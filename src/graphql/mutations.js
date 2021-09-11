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

 