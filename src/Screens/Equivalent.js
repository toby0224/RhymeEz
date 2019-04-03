import React, { Component } from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

class Equivalent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Equivalent screen</Text>
      </View>
    );
  }
}

export default Equivalent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
