import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Word from "./Word";

const wordList = props => {
  const wordsOutput = props.words.map((word, i) => (
    <Word
      word={word}
      key={i}
      onItemPressed={() => alert("word pressed: " + word)}
    />
  ));

  return <View>{wordsOutput}</View>;
};

export default wordList;
