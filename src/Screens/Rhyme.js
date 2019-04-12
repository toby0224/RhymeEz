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
import WordList from "../components/UI/WordList";
import Title from "../components/UI/Title";

import { getRhymes } from "../components/Fetch/Wordnik";

class Rhyme extends Component {
  constructor(props) {
    super(props);
    this.getResult();
  }

  state = {
    word: this.props.navigation.state.params.wordd,
    rhymeList: [],
    resObj: {}
  };

  getResult() {
    getRhymes(this.state.word)
      .then(list => {
        console.log(list[0].words);
        this.setState({
          rhymeList: list[0].words
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const image =
      "http://s.facegfx.com/image/2014/8/21/alphabet-gray-background-vector-graphics-free.jpg";

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
            <WordList words={this.state.rhymeList} />
            <Text style={styles.result}>
              results: {this.state.rhymeList.length}
            </Text>
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
  },
  result: {
    margin: 5,
    textAlign: "center"
  }
});
