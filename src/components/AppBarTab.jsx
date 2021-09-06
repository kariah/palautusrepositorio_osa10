import React from "react";
// import { Text, View, Pressable, StyleSheet } from 'react-native';
import { View, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";

import theme from "../theme";

const styles = StyleSheet.create({
  appBarTab: {
    color: theme.appbar.color,
    fontWeight: theme.appbar.fontWeight,
    paddingRight: 20,
    paddingBottom: 5,
  },
});

//kts.
//https://reactrouter.com/native/guides/quick-start
//https://reactrouter.com/core/api/Switch

const AppBarTab = (props) => {
  const text = props.text;
  const to = props.to;
  const onPress = props.onPress;

  return (
    <View>
      <Link to={to} onPress={onPress}>
        <Text style={styles.appBarTab}>{text}</Text>
      </Link>
    </View>
  );
};

{
  /* <Pressable
onPress={() => console.log('You pressed Repositories')}>
<Text style={styles.appBarTab}>{text}</Text>
</Pressable> */
}

export default AppBarTab;
