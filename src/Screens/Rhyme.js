import React, { Component } from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "react-navigation";

import Antonym from "./Antonym";
import Equivalent from "./Equivalent";
import Synonym from "./Synonym";

class Rhyme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Rhyme</Text>
      </View>
    );
  }
}

//export default Rhyme;
export default createBottomTabNavigator({
  Rhyme: Rhyme,
  Antonym: Antonym,
  Synonym: Synonym,
  Equivalent: Equivalent
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
