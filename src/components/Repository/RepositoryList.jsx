import React from "react";
import { useState } from 'react';
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {

    const [sortOrder, sortSortOrder] = useState('CREATED_AT');
    const [sortDirection, setSortDirection] = useState('DESC');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchText] = useDebounce(searchQuery, 500);

    const { repositories, fetchMore } = useRepositories({ first: 2, sortOrder, sortDirection, searchText });

    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    const onEndReach = () => {
        console.log('onEndReach');

        fetchMore();
    };

    return <RepositoryListContainer
        repositories={repositoryNodes}
        sortSortOrder={sortSortOrder}
        setSortDirection={setSortDirection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onEndReach={onEndReach}
    />;
};

export default RepositoryList;
