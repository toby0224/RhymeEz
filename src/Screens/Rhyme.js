import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";

import { createBottomTabNavigator } from "react-navigation";

import Antonym from "./Antonym";
import Equivalent from "./Equivalent";
import Synonym from "./Synonym";

import API from "../../backend/api";

class Rhyme extends Component {
  // constructor(props) {
  //   super(props);
  //   // const s = this.props.navigation.state.params.wordd;
  // }

  state = {
    word: this.props.navigation.state.params.wordd,
    rhymeList: [],
    resObj: {}
  };

  // componentDidMount() {
  //   API.apiRequest().then(res => {
  //     this.setState({
  //       rhymes: res.
  //     });
  //   });
  // }

  render() {
    const image =
      "http://s.facegfx.com/image/2014/8/21/alphabet-gray-background-vector-graphics-free.jpg";

    const list = [
      "Rhyme1",
      "Rhyme2",
      "Rhyme3",
      "Rhyme4",
      "Rhyme5",
      "Rhyme6",
      "Rhyme7",
      "Rhyme8",
      "Rhyme9",
      "Rhyme10",
      "Rhyme11",
      "Rhyme12",
      "Rhyme13",
      "Rhyme14",
      "Rhyme15",
      "Rhyme16",
      "Rhyme17",
      "Rhyme18",
      "Rhyme19",
      "Rhyme20",
      "Rhyme21",
      "Rhyme22",
      "Rhyme23",
      "Rhyme24",
      "Rhyme25",
      "Rhyme26",
      "Rhyme27",
      "Rhyme28",
      "Rhyme29",
      "Rhyme30"
    ];

    const outputs = list.slice(0).map((item, key) => (
      <Text style={styles.items} key={key}>
        {item}
      </Text>
    ));

    return (
      <ImageBackground
        source={{
          uri: image
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Rhyme</Text>
          <View style={styles.wordContainer}>
            <Text style={styles.wordSearch}>{this.state.word}</Text>
          </View>

          <ScrollView style={styles.historyContainer}>
            <View style={styles.itemsList}>{outputs}</View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

//export default Rhyme;
export default createBottomTabNavigator({
  Rhyme: Rhyme,
  Equivalent: Equivalent,
  Antonym: Antonym,
  Synonym: Synonym
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "purple",
    paddingTop: 10,
    fontSize: 20
  },
  wordSearch: {
    fontSize: 30,
    textAlign: "center"
  },
  wordContainer: {
    marginTop: 30,
    marginBottom: 10,
    paddingBottom: 20,
    width: "100%",
    borderBottomWidth: 1
  },

  historyContainer: {
    marginBottom: 20,
    margin: 5,
    width: "100%"
  },
  itemsList: {
    alignItems: "flex-start",
    margin: 5
  },
  items: {
    fontSize: 20,
    marginLeft: 20,
    paddingBottom: 10,
    textAlign: "center"
  }
});
