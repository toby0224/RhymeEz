import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import { StackNavigator } from "react-navigation";
import Definition from "./Details";
import Word from "../components/UI/Word";

import WordList from "../components/UI/WordList";
import { getSynonyms } from "../components/Fetch/Wordnik";

class Synonym extends Component {
  constructor(props) {
    super(props);
    this.getResult();
  }

  state = {
    word: this.props.navigation.state.params.wordd,
    synonymList: [],
    resObj: {}
  };

  getResult() {
    getSynonyms(this.state.word)
      .then(list => {
        this.setState({
          synonymList: list[0].words
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
          <Text style={styles.title}>Synonym</Text>

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
            <WordList words={this.state.synonymList} />
            <Text style={styles.result}>
              results: {this.state.synonymList.length}
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Synonym;

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
