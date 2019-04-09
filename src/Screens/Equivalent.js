import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  navigationOptions,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import { StackNavigator } from "react-navigation";
import API from "../../backend/api";
import Definition from "./Details";
import Word from "../components/UI/Word";

class Equivalent extends Component {
  // constructor(props) {
  //   super(props);
  //   // const s = this.props.navigation.state.params.wordd;
  // }

  state = {
    word: this.props.navigation.state.params.wordd,
    equivalentList: [],
    resObj: {}
  };

  // componentDidMount() {
  //   API.apiRequest().then(res => {
  //     this.setState({
  //       equivalents: res.
  //     });
  //   });
  // }

  render() {
    const list = [
      "Equivalent1",
      "Equivalent2",
      "Equivalent3",
      "Equivalent4",
      "Equivalent5",
      "Equivalent6",
      "Equivalent7",
      "Equivalent8",
      "Equivalent9",
      "Equivalent10",
      "Equivalent11",
      "Equivalent12",
      "Equivalent13",
      "Equivalent14",
      "Equivalent15",
      "Equivalent16",
      "Equivalent17",
      "Equivalent18",
      "Equivalent19",
      "Equivalent20",
      "Equivalent21",
      "Equivalent22",
      "Equivalent23",
      "Equivalent24",
      "Equivalent25",
      "Equivalent26",
      "Equivalent27",
      "Equivalent28",
      "Equivalent29",
      "Equivalent30"
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
          <Text style={styles.title}>Equivalent</Text>

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

//export default Rhyme;
export default Equivalent;

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
