import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";

import WordList from "../components/UI/WordList";
import { getSynonyms, getDefinition } from "../components/Fetch/Wordnik";
import Title from "../components/UI/Title";
import DefinitionModal from "../components/UI/DefinitionModal";

Array.prototype.isArray = true;

class Synonym extends Component {
  state = {
    word: this.props.navigation.state.params.wordd,
    synonymList: [],
    isLoading: false,
    modalVisible: false, // control state of Modal,
    definition: [],
    selectedWord: "",
    error: ""
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    getSynonyms(this.state.word)
      .then(list => {
        if (!list.isArray) {
          console.log(list.message + "... list from rhyme");
          this.setState({
            error: list.message
          });
        } else {
          this.setState({
            synonymList: list[0].words,
            isLoading: false
          });
        }
      })
      .catch(error => {
        console.log(error.message), this.setState({ isLoading: false });
      });
  }
  onSelectedWord(selectedWord) {
    this.setState({
      selectedWord: selectedWord
    }); // set selected word to pass to Modal
    this.getDefinition(selectedWord);
    this.triggerModal();
  }
  getDefinition = selectedWord => {
    getDefinition(selectedWord)
      .then(list => {
        this.setState({
          definition: list
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  triggerModal() {
    this.setState({
      modalVisible: true
    });
  }
  closeModal() {
    this.setState({
      modalVisible: false,
      definition: []
    });
  }

  results() {
    if (this.state.isLoading === true) {
      return <Text>Loading...</Text>;
    } else if (this.state.synonymList.length === 0) {
      return <Text>No results</Text>;
    } else {
      return <Text>results: {this.state.synonymList.length}</Text>;
    }
  }

  displaySynonymScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Synonym</Text>

        <View style={styles.wordContainer}>
          <Title
            title={this.state.word}
            onItemPressed={() => this.onSelectedWord(this.state.word)}
          />
        </View>

        <ScrollView style={styles.listContainer}>
          {this.checkLimit()}
        </ScrollView>
      </View>
    );
  }

  checkLimit() {
    if (this.state.error)
      return (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.warning}>Warning:</Text>
          <Text>{this.state.error}</Text>
        </View>
      );
    else
      return (
        <View>
          <WordList
            words={this.state.synonymList}
            selectedWord={this.onSelectedWord.bind(this)} // to receive data back from child component
          />
          <DefinitionModal
            selectedWord={this.state.selectedWord}
            visible={this.state.modalVisible}
            closeModal={this.closeModal.bind(this)}
            definition={this.state.definition}
          />
          <Text style={styles.result}>{this.results()}</Text>
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
        {this.displaySynonymScreen()}
      </ImageBackground>
    );
  }
}

export default Synonym;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  warning: {
    margin: 10,
    color: "red",
    fontSize: 20,
    fontWeight: "bold"
  },
  modalContainer: {
    flex: 1,
    width: "60%%",
    height: "60%",
    margin: "auto",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black"
  },
  innerModal: {
    alignContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    margin: "auto"
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
