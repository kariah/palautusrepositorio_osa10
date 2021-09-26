import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import AppBarTab from "./AppBarTab";
import theme from "../../theme"; 
import { useContext } from 'react';
import AuthStorageContext from "../../contexts/AuthStorageContext";
import { useHistory } from "react-router-native";
import useAuthorizedUser from "../../hooks/useAuthorizedUser";

const styles = StyleSheet.create({
    container: {
        paddingTop: theme.appbar.paddingTop,
        paddingBottom: theme.appbar.paddingBottom,
        backgroundColor: theme.appbar.backgroundColor,
        color: theme.appbar.color,
        fontWeight: theme.appbar.fontWeight,
        flexDirection: "row",
        flexGrow: 1,
    },
}); 

const AppBar = () => { 
    let reviewHistory = useHistory();
    const authStorage = useContext(AuthStorageContext);

    const signOut = async () => {
        await authStorage.removeAccessToken();
        history.go("/signin");
    };
     
    const { data, loading } = useAuthorizedUser({ includeReviews: false });
   
    if (loading) {
        return <View><Text>loading ...</Text>.</View>;
    }

    const authorizedUser = data ? data.authorizedUser : null; 

    const openUserReviews = (id, history) => { 
        const url = `../reviews/${id}`; 
        history.push(url);
    };
     
    const UserTabs = () => {
        if (authorizedUser === null) {
            return (
                <View style={{ flexDirection: "row" }}>
                    <AppBarTab to="/signin" text="Sign in"></AppBarTab>
                    <AppBarTab to="/signup" text="Sign up"></AppBarTab>
                </View>);
        } else {
            return (
                <View style={{ flexDirection: "row", }}>
                    <AppBarTab to="/review" text="Create a Review"></AppBarTab>
                    <AppBarTab text="My Reviews" onPress={() => openUserReviews(authorizedUser.id, reviewHistory)}></AppBarTab>
                    <AppBarTab onPress={() => signOut()} text="Sign out"></AppBarTab>
                </View>);
        }
    };

    return (
        <View>
            <View style={styles.container}>
                <ScrollView horizontal>
                    <AppBarTab to="/" text="Repositories"></AppBarTab>
                    <UserTabs></UserTabs>
                </ScrollView>
            </View>
        </View>
    );


};

export default AppBar;
