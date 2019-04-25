import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import WordList from "../components/UI/WordList";
import { getEquivalents } from "../components/Fetch/Wordnik";
import Title from "../components/UI/Title";

class Equivalent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    word: this.props.navigation.state.params.wordd,
    equivalentList: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    getEquivalents(this.state.word)
      .then(list => {
        console.log(list[0].words);
        this.setState({
          equivalentList: list[0].words,
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
    } else if (this.state.equivalentList.length === 0) {
      return <Text>No results</Text>;
    } else {
      return <Text>results: {this.state.equivalentList.length}</Text>;
    }
  }

  displayEquivalentScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Equivalent</Text>

        <View style={styles.wordContainer}>
          <Title
            title={this.state.word}
            onItemPressed={() => alert("title pressed")}
          />
        </View>

        <ScrollView style={styles.listContainer}>
          <WordList words={this.state.equivalentList} />
          <Text style={styles.result}>{this.results()}</Text>
        </ScrollView>
      </View>
    );
  }

  render() {
    const image =
      "http://s.facegfx.com/image/2014/8/21/alphabet-gray-background-vector-graphics-free.jpg";
    return (
      <ImageBackground
        source={{
          uri: image
        }}
        style={styles.background}
      >
        {this.displayEquivalentScreen()}
      </ImageBackground>
    );
  }
}

export default Equivalent;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
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
