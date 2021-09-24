import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";
import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import AuthStorageContext from "../../contexts/AuthStorageContext";
import { useHistory } from "react-router-native";

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
import { useContext } from "react";

const AppBar = () => {
    let history = useHistory();
    const authStorage = useContext(AuthStorageContext);

    const signOut = async () => {
        await authStorage.removeAccessToken();
        history.go("/signin");
    };

    const { data, error, loading } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: "cache-and-network",
    });

    if (loading) {
        return <>loading ...</>;
    }

    const authorizedUser = data ? data.authorizedUser : null; 

    const openUserReviews = (id, history) => { 
        const url = `../reviews/${id}`;
        console.log('url ', url)
        history.push(url);
    };

    //<AppBarTab to="/reviews/:id" text="My Reviews" onPress={() => openUserReviews(authorizedUser.id, history)}></AppBarTab>
    //<AppBarTab to="`/reviews/${authorizedUser.id}`" text="My Reviews"></AppBarTab>

    const UserTabs = () => {
        if (authorizedUser === null) {
            return (
                <>
                    <AppBarTab to="/signin" text="Sign in"></AppBarTab>
                    <AppBarTab to="/signup" text="Sign up"></AppBarTab>
                </>);
        } else {
            return (
                <>
                    <AppBarTab to="/review" text="Create a Review"></AppBarTab>
                    <AppBarTab text="My Reviews" onPress={() => openUserReviews(authorizedUser.id, history)}></AppBarTab>
                    <AppBarTab onPress={() => signOut()} text="Sign out"></AppBarTab>
                </>);
        }
    };

    return (
        <>
            <View style={styles.container}>
                <ScrollView horizontal>
                    <AppBarTab to="/" text="Repositories"></AppBarTab>
                    <UserTabs></UserTabs>
                </ScrollView>
            </View>
        </>
    );


};

export default AppBar;
