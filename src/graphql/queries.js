import {
    gql
} from '@apollo/client';
import {
    REPOSITORY_INFO,
    REVIEW_INFO
} from "./fragments";


export const GET_REPOSITORY = gql` 
    query getRepositoryById(
        $id: ID!,
        $first: Int,
        $after: String,
        ) {
        repository(id: $id) {  
            ...RepositoryInfo
        reviews(first: $first,
                after: $after) {
          edges {
            node {
               ...ReviewInfo
            }
            cursor
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
          }
        }
     }
  }
${REPOSITORY_INFO}
${REVIEW_INFO}
`;

//repositories(
//after: String
//first: Int
//orderDirection: OrderDirection
//orderBy: AllRepositoriesOrderBy
//searchKeyword: String
//ownerName: String
//): RepositoryConnection!

export const GET_REPOSITORIES = gql`
   query getRepositories(
        $orderBy: AllRepositoriesOrderBy,
        $orderDirection: OrderDirection,
        $searchKeyword: String,
        $first: Int,
        $after: String,
) {
    repositories(orderBy: $orderBy,
                 orderDirection: $orderDirection,
                 searchKeyword: $searchKeyword,
                 first: $first,
                 after: $after) {
        edges {
          node { 
            ...RepositoryInfo
          }
          cursor
        }
        pageInfo {
            endCursor
            startCursor
            hasNextPage
          }
      }
  }
${REPOSITORY_INFO}
`;

export const GET_AUTHORIZED_USER = gql`
  query { 
      authorizedUser {
        id
        username
      }
    } 
`;