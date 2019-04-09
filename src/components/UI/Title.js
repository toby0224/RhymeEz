import React from "react";

import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";

const title = props => {
  const titleOutput = props => (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
      <View style={styles.wordView}>
        <Text style={styles.wordSearch}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
  return <View>{titleOutput}</View>;
};
export default title;

const styles = StyleSheet.create({
  wordView: {
    backgroundColor: "red"
  },
  wordSearch: {
    fontSize: 30
  }
});
1;
