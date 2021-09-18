import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem"; 
import RepositoryListHeader from "./RepositoryListHeader ";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
    repositories,
    setSorting,
    searchQuery,
    setSearchQuery
}) => {

    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    const renderItem = ({ item }) => <RepositoryItem item={item} />;

    /* Jostain syystä listan elementit menivät selaimessa aina menu-elementin päälle enkä löytänyt tähän kunnollista ratkaisua joten päädyin laittamaan oman viewn sisään*/
    /* en käyttänyt tätä tapaa: ListHeaderComponent = {() => <RepositoryListHeader setSorting={setSorting} />}*/

    return (
        <View>
            <RepositoryListHeader
                setSorting={setSorting}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default RepositoryListContainer;
