import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Modal,
  TouchableOpacity
} from "react-native";

import { createBottomTabNavigator } from "react-navigation";

import Antonym from "./Antonym";
import Equivalent from "./Equivalent";
import Synonym from "./Synonym";
import Word from "../components/UI/Word";
import WordList from "../components/UI/WordList";
import Title from "../components/UI/Title";

import API from "../../backend/api";

class Rhyme extends Component {
  constructor(props) {
    super(props);
    const s = this.props.navigation.state.params.wordd;
    console.log(this.state.rhymeList);
  }

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

    const outputs = list.map((item, i) => <Word word={item} key={i} />);

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
            {/* ------ break into title component ---- */}
            <View>
              <TouchableOpacity
                onPress={() => alert("word pressed: " + this.state.word)}
              >
                <View style={styles.wordView}>
                  <Text style={styles.wordSearch}>{this.state.word}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* -------------------------------- */}
          </View>

          <ScrollView style={styles.listContainer}>
            <WordList words={list} />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const bottomNavigation = createBottomTabNavigator({
  Rhyme: Rhyme,
  Equivalent: Equivalent,
  Antonym: Antonym,
  Synonym: Synonym
});

export default bottomNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "purple",
    paddingTop: 10,
    fontSize: 30
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

  listContainer: {
    marginBottom: 20,
    width: "100%"
  }
});
