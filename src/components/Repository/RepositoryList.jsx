import React from "react";
import { useState } from 'react';
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
 
const RepositoryList = () => {
    const [sorting, setSorting] = useState({
        orderBy: "CREATED_AT",
        OrderDirection: "DESC"
    });
    const [searchQuery, setSearchQuery] = useState('');
    const { repositories } = useRepositories(sorting, searchQuery);


    console.log('searchquery, haku ', searchQuery)

    return <RepositoryListContainer
        repositories={repositories}
        setSorting={setSorting}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
    />;
};

export default RepositoryList;
