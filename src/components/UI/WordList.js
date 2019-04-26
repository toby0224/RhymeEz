import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Word from "./Word";

class WordList extends Component {
  wordsOutput(words) {
    // return array of words in list form
    return words.map((word, i) => (
      <Word
        word={word}
        key={i}
        onItemPressed={() => {
          this.sendWord(word); // return selected word to parent through sendWord()
        }}
      />
    ));
  }

  sendWord(word) {
    this.props.selectedWord(word); // send back data to parent class
  }

  render() {
    return <View>{this.wordsOutput(this.props.words)}</View>;
  }
}

export default WordList;

const styles = StyleSheet.create({
  result: {
    fontSize: 20,
    textAlign: "center"
  }
});
