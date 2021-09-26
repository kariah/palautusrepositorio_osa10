import { gql } from "@apollo/client";

export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
      id,
      fullName,
      url,
      name,
      description,
      fullName,
      ratingAverage,
      reviewCount,
      stargazersCount,
      watchersCount,
      forksCount,
      openIssuesCount,
      description,
      language,
      ownerAvatarUrl, 
      language,  }
`;

export const REVIEW_INFO = gql`
  fragment ReviewInfo on Review {
    id
    text
    rating
    createdAt
    repositoryId
    user {
      id
      username
    }
  }
`;