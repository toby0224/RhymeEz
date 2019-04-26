import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";

import WordList from "../components/UI/WordList";
import { getAntonyms, getDefinition } from "../components/Fetch/Wordnik";
import Title from "../components/UI/Title";
import DefinitionModal from "../components/UI/DefinitionModal";

class Antonym extends Component {
  state = {
    word: this.props.navigation.state.params.wordd,
    antonymList: [],
    isLoading: false,
    modalVisible: false, // control state of Modal,
    definition: [],
    selectedWord: ""
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    getAntonyms(this.state.word)
      .then(list => {
        this.setState({
          antonymList: list[0].words,
          isLoading: false
        });
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
    } else if (this.state.antonymList.length === 0) {
      return <Text>No results</Text>;
    } else {
      return <Text>results: {this.state.antonymList.length}</Text>;
    }
  }

  displayAntonymScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Antonym</Text>
        <View style={styles.wordContainer}>
          <Title
            title={this.state.word}
            onItemPressed={() => this.onSelectedWord(this.state.word)}
          />
        </View>
        <ScrollView style={styles.listContainer}>
          <WordList
            words={this.state.antonymList}
            selectedWord={this.onSelectedWord.bind(this)}
          />
          <DefinitionModal
            selectedWord={this.state.selectedWord}
            visible={this.state.modalVisible}
            closeModal={this.closeModal.bind(this)}
            definition={this.state.definition}
          />
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
        {this.displayAntonymScreen()}
      </ImageBackground>
    );
  }
}

export default Antonym;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
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
