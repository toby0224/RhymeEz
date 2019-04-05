import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  navigationOptions,
  ImageBackground
} from "react-native";

import { StackNavigator } from "react-navigation";
import API from "../../backend/api";

class Antonym extends Component {
  // constructor(props) {
  //   super(props);
  //   // const s = this.props.navigation.state.params.wordd;
  // }

  state = {
    word: this.props.navigation.state.params.wordd,
    antonymList: [],
    resObj: {}
  };

  // componentDidMount() {
  //   API.apiRequest().then(res => {
  //     this.setState({
  //       antonyms: res.
  //     });
  //   });
  // }

  render() {
    const list = [
      "Antonym1",
      "Antonym2",
      "Antonym3",
      "Antonym4",
      "Antonym5",
      "Antonym6",
      "Antonym7",
      "Antonym8",
      "Antonym9",
      "Antonym10",
      "Antonym11",
      "Antonym12",
      "Antonym13",
      "Antonym14",
      "Antonym15",
      "Antonym16",
      "Antonym17",
      "Antonym18",
      "Antonym19",
      "Antonym20",
      "Antonym21",
      "Antonym22",
      "Antonym23",
      "Antonym24",
      "Antonym25",
      "Antonym26",
      "Antonym27",
      "Antonym28",
      "Antonym29",
      "Antonym30"
    ];

    const image =
      "http://s.facegfx.com/image/2014/8/21/alphabet-gray-background-vector-graphics-free.jpg";

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
          <Text style={styles.title}>Antonym</Text>
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
