import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader ";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});


//export const RepositoryListContainer = ({
//    repositories,
//    setSorting,
//    searchQuery,
//    setSearchQuery
//}) => {

export default class RepositoryListContainer extends React.Component {

    renderHeader = () => {
        // this.props contains the component's props
        const {
            repositories,
            setSorting,
            searchQuery,
            setSearchQuery } = this.props;

        return (
            <RepositoryListHeader
                setSorting={setSorting}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        );
    }; 
     
    renderItem = ({ item }) => <RepositoryItem item={item} />; 
    itemSeparator = () => <View style={styles.separator} />;

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.repositories}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id} 
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    };
};