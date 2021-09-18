import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
/*import RepositorySort from "./RepositorySort";*/
import RepositoryListHeader from "./RepositoryListHeader ";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setSorting }) => {

    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    const renderItem = ({ item }) => <RepositoryItem item={item} />;

   /* Jostain syystä header - komponentti menee selaimessaflatlistin päälle enkä löytänyt tähän kunnollista ratkaisua joten päädyin laittamaan näkymän sisään*/
    /*ListHeaderComponent = {() => <RepositoryListHeader setSorting={setSorting} />}*/

    return (
        <View>
            <RepositoryListHeader setSorting={setSorting} />
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
