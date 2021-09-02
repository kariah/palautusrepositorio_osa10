import {
    gql
} from '@apollo/client';

export const GET_REPOSITORIES = gql `
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