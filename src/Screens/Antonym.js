import React, { Component } from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

class Antonym extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Antonym screen</Text>
      </View>
    );
  }
}

export default Antonym;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
