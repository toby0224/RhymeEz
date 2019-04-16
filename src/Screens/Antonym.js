import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import Definition from "./Details";
import WordList from "../components/UI/WordList";
import { getAntonyms } from "../components/Fetch/Wordnik";

class Antonym extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    word: this.props.navigation.state.params.wordd,
    antonymList: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    getAntonyms(this.state.word)
      .then(list => {
        console.log(list[0].words);
        this.setState({
          antonymList: list[0].words,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error), this.setState({ isLoading: false });
      });
  }

  results() {
    if (this.state.isLoading === true) {
      return <Text>Loading...</Text>;
    } else {
      return <Text>results: {this.state.antonymList.length}</Text>;
    }
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
          <Text style={styles.title}>Antonym</Text>
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

          <ScrollView style={styles.historyContainer}>
            <WordList words={this.state.antonymList} />
            <Text style={styles.result}>{this.results()}</Text>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Antonym;

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

  historyContainer: {
    marginBottom: 20,
    width: "100%"
  },
  result: {
    margin: 5,
    textAlign: "center"
  }
});
