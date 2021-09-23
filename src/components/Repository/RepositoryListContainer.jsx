import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader ";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
}); 

export default class RepositoryListContainer extends React.Component { 
    renderHeader = () => {
        // this.props contains the component's props
        const { 
            sortSortOrder,
            setSortDirection,
            searchQuery,
            setSearchQuery,
            onEndReach
        } = this.props;

        return (
            <RepositoryListHeader
                sortSortOrder={sortSortOrder}
                setSortDirection={setSortDirection}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        );
    }; 
     
    renderItem = ({ item }) => <RepositoryItem item={item} />; 
    itemSeparator = () => <View style={styles.separator} />;


    render() {
        //console.log('onEndReach ', this.props.onEndReach)

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.props.repositories}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id} 
                    ListHeaderComponent={this.renderHeader}
                    onEndReached={this.props.onEndReach}
                    onEndReachedThreshold={0.5}
                />
            </View>
        );
    };
};