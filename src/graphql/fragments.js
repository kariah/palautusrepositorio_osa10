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