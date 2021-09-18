import {
    gql
} from '@apollo/client';
import {
    REPOSITORY_INFO,
    REVIEW_INFO
} from "./fragments";


export const GET_REPOSITORY = gql` 
    query getRepositoryById($id: ID!) {
        repository(id: $id) {  
            ...RepositoryInfo
        reviews {
          edges {
            node {
               ...ReviewInfo
            }
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
        $searchKeyword: String
) {
    repositories(orderBy: $orderBy,
                 orderDirection: $orderDirection,
                 searchKeyword: $searchKeyword) {
        edges {
          node { 
            ...RepositoryInfo
          }
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