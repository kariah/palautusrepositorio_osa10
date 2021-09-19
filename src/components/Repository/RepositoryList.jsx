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

    const { repositories } = useRepositories(sortOrder, sortDirection, searchText);

    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return <RepositoryListContainer
        repositories={repositoryNodes}
        sortSortOrder={sortSortOrder}
        setSortDirection={setSortDirection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
    />;
};

export default RepositoryList;
