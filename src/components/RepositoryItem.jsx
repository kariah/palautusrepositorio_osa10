import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import RepositoryItemImage from "./RepositoryItemImage.jsx";
import theme from "../theme";

//Esimerkki
//https://snack.expo.dev/@kalleilv/3d045d

const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 20,
  },
  bold: {
    fontWeight: "700",
  },
});

const itemHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
  },
  imageContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infocontainer: {
    flexGrow: 1,
    // alignItems: 'left'
  },
  buttonContainer: {
    flexDirection: "row",
    flexGrow: 0,
    paddingTop: 20,
    paddingBottom: 20,
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

const RepositoryItem = (item) => {
  return (
    <>
      <View style={itemStyles.container}>
        <RepositoryItemHeader item={item}></RepositoryItemHeader>
        <RepositoryItemFooter item={item}></RepositoryItemFooter>
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
        <View style={itemHeaderStyles.container.infocontainer}>
          <View style={itemHeaderStyles.container.info}>
            <Text style={itemStyles.bold}>{item.item.fullName}</Text>
            <Text>{item.item.description}</Text>
          </View>
          <View style={itemHeaderStyles.buttonContainer}>
            <AppButton
              title={item.item.language}
              onPress={() => console.log("Button pressed")}
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
        ></FooterTotal>
        <FooterTotal total={item.item.forksCount} text="Forks"></FooterTotal>
        <FooterTotal total={item.item.reviewCount} text="Reviews"></FooterTotal>
        <FooterTotal
          total={item.item.ratingAverage}
          text="Rating"
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

  let amountToShow = nFormatter(total);

  return (
    <>
      <View style={itemFooterStyles.total}>
        <View>
          <Text style={itemStyles.bold}>{amountToShow}</Text>
        </View>
        <View>
          <Text>{text}</Text>
        </View>
      </View>
    </>
  );
};

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={theme.appButton.appButtonContainer}
  >
    <Text style={theme.appButton.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default RepositoryItem;
