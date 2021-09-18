import React from "react";
import { useState } from 'react';
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

/*<View style={{ zIndex: 0 }} ></View>*/
const RepositoryList = () => {
    const [sorting, setSorting] = useState({
        orderBy: "CREATED_AT",
        OrderDirection: "DESC"
    });
    const { repositories } = useRepositories(sorting);
     
    return <RepositoryListContainer repositories={repositories} setSorting={setSorting} />;
};

export default RepositoryList;
