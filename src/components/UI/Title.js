import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const title = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

export default title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "purple",
    fontSize: 30
  }
});
