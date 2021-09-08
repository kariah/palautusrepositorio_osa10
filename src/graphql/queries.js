import {
    gql
} from '@apollo/client'; 


//export const GET_REPOSITORY = gql` 
//   query repository($id: ID!) {
//       repository(id: $id) {
//            id
//            fullName
//            url
//            name
//            description
//            fullName
//            ratingAverage
//            reviewCount
//            stargazersCount
//            watchersCount
//            forksCount
//            openIssuesCount
//            ownerAvatarUrl
//            description
//            language 
//     }
//  }
//`;

export const GET_REPOSITORY = gql`
 query {
    repository(id: "jaredpalmer.formik") { 
        id,
        fullname,
        url,
        name,
        description,
        fullname,
        ratingaverage,
        reviewcount,
        stargazerscount,
        watcherscount,
        forkscount,
        openissuescount,
        owneravatarurl,
        description,
        language
    }
  }
`;  

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
          node { 
            id,
            name,
            description,
            fullName,
            ratingAverage,
            reviewCount,
            stargazersCount,
            watchersCount,
            forksCount,
            openIssuesCount, 
            ownerAvatarUrl,
            description,
            language,
          }
        }
      }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query { 
      authorizedUser {
        id
        username
      }
    } 
`;