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
import API from "../../backend/api";
import Definition from "./Details";
import Word from "../components/UI/Word";

class Synonym extends Component {
  // constructor(props) {
  //   super(props);
  //   // const s = this.props.navigation.state.params.wordd;
  // }

  state = {
    word: this.props.navigation.state.params.wordd,
    synonymList: [],
    resObj: {}
  };

  // componentDidMount() {
  //   API.apiRequest().then(res => {
  //     this.setState({
  //       synonyms: res.
  //     });
  //   });
  // }

  render() {
    const list = [
      "Synonym1",
      "Synonym2",
      "Synonym3",
      "Synonym4",
      "Synonym5",
      "Synonym6",
      "Synonym7",
      "Synonym8",
      "Synonym9",
      "Synonym10",
      "Synonym11",
      "Synonym12",
      "Synonym13",
      "Synonym14",
      "Synonym15",
      "Synonym16",
      "Synonym17",
      "Synonym18",
      "Synonym19",
      "Synonym20",
      "Synonym21",
      "Synonym22",
      "Synonym23",
      "Synonym24",
      "Synonym25",
      "Synonym26",
      "Synonym27",
      "Synonym28",
      "Synonym29",
      "Synonym30"
    ];
    const image =
      "http://s.facegfx.com/image/2014/8/21/alphabet-gray-background-vector-graphics-free.jpg";

    const outputs = list
      .slice(0)
      .map((item, i) => <Word word={item} key={i} />);

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
            <View>{outputs}</View>
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
  }
});
