import React from "react";
import { useState } from 'react';
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";
 
const RepositoryList = () => {
    const [sorting, setSorting] = useState({
        orderBy: "CREATED_AT",
        OrderDirection: "DESC"
    });
    const [searchQuery, setSearchQuery] = useState(''); 
    const [searchText] = useDebounce(searchQuery, 500);

    const { repositories } = useRepositories(sorting, searchText); 

    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return <RepositoryListContainer
        repositories={repositoryNodes}
        setSorting={setSorting}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
    />;
};

export default RepositoryList;
