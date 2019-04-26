import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Details = props => {
  return (
    <View style={styles.definition}>
      <Text style={styles.partOfSpeechStyle}>{props.partOfSpeech}</Text>
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  definition: {
    paddingBottom: 20
  },
  partOfSpeechStyle: {
    fontWeight: "bold"
  },
  textStyle: {
    fontStyle: "italic"
  }
});
