import React, { Component } from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

class Synonym extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Synonym screen</Text>
      </View>
    );
  }
}

export default Synonym;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
