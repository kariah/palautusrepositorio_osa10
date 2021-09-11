import React from 'react'; 
import { render } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/Repository/RepositoryListContainer';
import 'react-testing-library/extend-expect';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it.only('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
   
        const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

        //debug();   
    
        expect(getAllByTestId('fullName')[0]).toHaveTextContent('jaredpalmer/formik');
        expect(getAllByTestId('description')[0]).toHaveTextContent('Build forms in React, without the tears');
        expect(getAllByTestId('language')[0]).toHaveTextContent('TypeScript');
        expect(getAllByTestId('forksCount')[0]).toHaveTextContent(nFormatter(1619));
        expect(getAllByTestId('stargazersCount')[0]).toHaveTextContent(nFormatter(21856));
        expect(getAllByTestId('ratingAverage')[0]).toHaveTextContent(nFormatter(88));
        expect(getAllByTestId('reviewCount')[0]).toHaveTextContent(nFormatter(3));
  
        expect(getAllByTestId('fullName')[1]).toHaveTextContent('async-library/react-async');
        expect(getAllByTestId('description')[1]).toHaveTextContent('Flexible promise-based React data loader');
        expect(getAllByTestId('language')[1]).toHaveTextContent('JavaScript');
        expect(getAllByTestId('forksCount')[1]).toHaveTextContent(nFormatter(69));
        expect(getAllByTestId('stargazersCount')[1]).toHaveTextContent(nFormatter(1760));
        expect(getAllByTestId('ratingAverage')[1]).toHaveTextContent(nFormatter(72));
        expect(getAllByTestId('reviewCount')[1]).toHaveTextContent(nFormatter(3));
        
      });
    });
  });

  function nFormatter(num) { 
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num;
  }
  