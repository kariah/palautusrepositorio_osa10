import React from "react";
import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Menu, Provider, Divider, Searchbar } from "react-native-paper";

const RepositoryListHeader = ({
    sortSortOrder,
    setSortDirection,
    searchQuery,
    setSearchQuery
}) => {

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const onChangeSearch = query => setSearchQuery(query);

    const setSorting = (order, direction) => {
        sortSortOrder(order);
        setSortDirection(direction);
    };

    const itemStyles = StyleSheet.create({
        searchBarContainer: {
            flexDirection: 'row',
            flexGrow: 1,
            justifyContent: 'center',
            backgroundColor: '#ebe9e6',
            alignItems: "center"
        },
        menuContainer: {
            flexDirection: 'row',
            flexGrow: 1,
            justifyContent: 'center',
            backgroundColor: '#ebe9e6',
            alignItems: "center",
            paddingBottom: 10,
            marginBottom: 60 
        },
    });


    return (
        <View style={{ zIndex: 99 }}>
            <View style={itemStyles.searchBarContainer}> 
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <Provider>
                <View style={{ zIndex: 99 }} style={itemStyles.menuContainer}> 
                    <View>
                        <Menu 
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<Button onPress={openMenu}>Latest repositories</Button>}>
                            <Menu.Item title="Select an item ..." />
                            <Divider />
                            <Menu.Item title="Latest repositories"
                                onPress={() => setSorting("CREATED_AT", "DESC")}
                            />
                            <Menu.Item title="Highest rated repositories"
                                onPress={() => setSorting("RATING_AVERAGE", "DESC")}
                            />
                            <Menu.Item title="Lowest rated repositories"
                                onPress={() => setSorting("RATING_AVERAGE", "ASC")}
                            />
                        </Menu>
                    </View>
                </View>
            </Provider>
        </View>
    );
};

export default RepositoryListHeader;