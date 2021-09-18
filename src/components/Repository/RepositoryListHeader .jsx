import React from "react";
import { useState } from 'react';
import { View } from "react-native";
import { Button, Menu, Provider, Divider, Searchbar } from "react-native-paper";

const RepositoryListHeader = ({
    setSorting,
    searchQuery,
    setSearchQuery
}) => {

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{ zIndex: 100 }}>
            <View
                style={{ 
                    flexDirection: 'row',
                    flexGrow: 1,
                    justifyContent: 'center',
                    backgroundColor: '#ebe9e6',
                    alignItems: "center"
                }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <Provider>
                <View style={{ zIndex: 100 }}
                    style={{ 
                        flexDirection: 'row',
                        flexGrow: 1, 
                        justifyContent: 'center',
                        backgroundColor: '#ebe9e6', 
                        alignItems: "center",
                        paddingBottom: 10,
                        marginBottom: 60
                    }}>
                  
                    <View style={{
                        flexDirection: 'row',
                        flexGrow: 0,
                        justifyContent: 'center',
                        alignItems: "center" 
                    }}>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<Button onPress={openMenu}>Latest repositories</Button>}>
                            <Menu.Item title="Select an item ..." />
                            <Divider />
                            <Menu.Item title="Latest repositories"
                                onPress={() => setSorting({ orderBy: "CREATED_AT", orderDirection: "DESC" })}
                            />
                            <Menu.Item title="Highest rated repositories"
                                onPress={() => setSorting({ orderBy: "RATING_AVERAGE", orderDirection: "DESC" })}
                            />
                            <Menu.Item title="Lowest rated repositories"
                                onPress={() => setSorting({ orderDirection: "RATING_AVERAGE", orderDirection: "ASC" })}
                            />
                        </Menu>
                    </View>
                </View>
            </Provider>
        </View>
    );
};

export default RepositoryListHeader;