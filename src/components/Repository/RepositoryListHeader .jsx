import React from "react";
import { useState } from 'react';
import { View } from "react-native";
import { Button, Menu, Provider, Divider, Searchbar } from "react-native-paper";
import { useDebounce } from 'use-debounce';

const RepositoryListHeader = ({
    setSorting,
    searchQuery,
    setSearchQuery
}) => {

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const [searchText, setSearchText] = useState('');
    searchQuery = useDebounce(searchText, 1000);

    console.log('searchText ', searchText)

   /* console.log('value ', value)*/
    //setSearchQuery(useDebounce(text, 1000)); 

    const onChangeSearch = query => {
        console.log('query ', query)
        setSearchText(query);
       /* setSearchQuery(query)*/
    } 

    //const [searchQuery, setSearchQuery] = React.useState(''); 
    //const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{ zIndex: 100 }}>
            <Provider>
                <View style={{ zIndex: 100 }}
                    style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: '#ebe9e6',
                        zIndex: 100,
                        textTransform: "none"
                    }}>
                    <View>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchText}
                        />
                    </View>
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
            </Provider>
        </View>
    );
};

export default RepositoryListHeader;