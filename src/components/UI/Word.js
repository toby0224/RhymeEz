import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";

const word = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text style={styles.wordStyle}>{props.word}</Text>
    </View>
  </TouchableOpacity>
);

export default word;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    margin: 5,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "rgba(52, 52, 52, 0.05)"
  },
  wordStyle: {
    fontSize: 18
  }
});
