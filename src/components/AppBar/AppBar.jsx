import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";
import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import AuthStorageContext from  "../../contexts/AuthStorageContext";

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

    const UserTabs = () => {
        if (data.authorizedUser === null || data.authorizedUser.id === null) {
            return <AppBarTab to="/signin" text="Sign in"></AppBarTab>;
        } else {
            return (
                <>
                    <AppBarTab to="/review" text="Create a Review"></AppBarTab>
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


    //return (
    //    <>
    //        <View style={styles.container}>
    //            <ScrollView horizontal>
    //                <AppBarTab to="/" text="Repositories"></AppBarTab>
    //                {username ? (
    //                    <>
    //                        <AppBarTab onPress={() => signOut()} text="Sign out"></AppBarTab>
    //                    </>
    //                ) : (
    //                    <AppBarTab to="/signin" text="Sign in"></AppBarTab>
    //                )}
    //                {/*{username && <AppBarLink text="Create Review" path="/review" />}*/}
    //                {/*{!username && <AppBarLink text="Sign Up" path="/signup" />}*/}
    //            </ScrollView>
    //        </View>
    //    </>
    //);
};

export default AppBar;
