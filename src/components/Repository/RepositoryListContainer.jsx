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

    /* Jostain syyst� listan elementit meniv�t selaimessa aina menu-elementin p��lle enk� l�yt�nyt t�h�n kunnollista ratkaisua joten p��dyin laittamaan oman viewn sis��n*/
    /* en k�ytt�nyt t�t� tapaa: ListHeaderComponent = {() => <RepositoryListHeader setSorting={setSorting} />}*/

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
