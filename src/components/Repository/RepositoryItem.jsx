import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import RepositoryItemImage from "./RepositoryItemImage.jsx";
import { useHistory } from "react-router-native";
import theme from "../../theme";

//Esimerkki
//https://snack.expo.dev/@kalleilv/3d045d

const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 20,
        backgroundColor: "#ecf0f1",
        padding: 20,
        paddingRight: 100 
    },
    bold: {
        fontWeight: "700",
    },
});

const itemHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexGrow: 1
    },
    imageContainer: {
        flexGrow: 0,
        paddingRight: 15,
    },
    infocontainer: {
        flexGrow: 1, 
    },
    buttonContainer: {
        flexDirection: "row",
        flexGrow: 0,
        paddingTop: 20,
        paddingBottom: 20,
    },
    info: { 
    },
});

const itemFooterStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "space-around",
    },
    total: {
        justifyContent: "center",
        alignItems: "center",
    },
});



const openRepository = (id, history) => {
    const url = `../repository/${id}`;
    history.push(url);
};

const RepositoryItem = (item) => {
    let history = useHistory();

    return (
        <>
            <View style={itemStyles.container}>
                <Pressable onPress={() => openRepository(item.item.id, history)} >
                    <RepositoryItemHeader item={item}></RepositoryItemHeader>
                    <RepositoryItemFooter item={item}></RepositoryItemFooter>
                </Pressable>
            </View>
        </>
    );
};

const RepositoryItemHeader = (props) => {
    const item = props.item;
    return (
        <>
            <View style={itemHeaderStyles.container}>
                <View style={itemHeaderStyles.imageContainer}>
                    <RepositoryItemImage
                        url={item.item.ownerAvatarUrl}
                    ></RepositoryItemImage>
                </View>
                <View style={itemHeaderStyles.infocontainer}>
                    <View style={itemHeaderStyles.info}>
                        <Text style={itemStyles.bold} testID="fullName">{item.item.fullName}</Text>
                        <Text testID="description">{item.item.description}</Text>
                    </View>
                    <View style={itemHeaderStyles.buttonContainer}>
                        <AppButton
                            title={item.item.language}
                            onPress={() => console.log("Button pressed")}
                            testID="language"
                        />
                    </View>
                </View>
            </View>
        </>
    );
};
 

const RepositoryItemFooter = (props) => {
    const item = props.item;

    return (
        <>
            <View style={itemFooterStyles.container}>
                <FooterTotal
                    total={item.item.stargazersCount}
                    text="Stars"
                    testID="stargazersCount"
                ></FooterTotal>
                <FooterTotal total={item.item.forksCount} text="Forks" testID="forksCount"></FooterTotal>
                <FooterTotal total={item.item.reviewCount} text="Reviews" testID="reviewCount"></FooterTotal>
                <FooterTotal
                    total={item.item.ratingAverage}
                    text="Rating"
                    testID="ratingAverage"
                ></FooterTotal>
            </View>
        </>
    );
};

//malli: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
function nFormatter(num) {
    // if (num >= 1000000000) {
    //    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'g';
    // }
    // if (num >= 1000000) {
    //    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
    // }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num;
}

const FooterTotal = (props) => {
    const text = props.text;
    const total = props.total;
    const testID = props.testID;

    let amountToShow = nFormatter(total);

    return (
        <>
            <View style={itemFooterStyles.total}>
                <View>
                    <Text style={itemStyles.bold} testID={testID}>{amountToShow}</Text>
                </View>
                <View>
                    <Text>{text}</Text>
                </View>
            </View>
        </>
    );
};

const AppButton = ({ onPress, title, testID }) => (
    <TouchableOpacity
        onPress={onPress}
        style={theme.appButton.appButtonContainer}
        testID={testID}
    >
        <Text style={theme.appButton.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

export default RepositoryItem;
