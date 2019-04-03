import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground
} from "react-native";

import CustomButton from "../components/UI/CustomButton";

class Welcome extends Component {
  state = {
    word: "",
    wordList: []
  };

  handleWordChange = word => {
    this.setState({ word: word });
  };

  clearField = () => {
    this.setState({
      word: ""
    });
  };

  handlePress = () => {
    if (this.state.word) {
      this.clearField();
      this.state.wordList.push(this.state.word);
    }
    this.clearField();
    //alert(this.state.word);

    this.props.navigation.navigate("Rhyme");
  };

  render() {
    const image =
      "http://s.facegfx.com/image/2014/8/21/alphabet-gray-background-vector-graphics-free.jpg";

    const listWords = this.state.wordList
      .slice(0)
      .reverse()
      .map((item, key) => <Text key={key}>{item}</Text>);

    return (
      <ImageBackground
        source={{
          uri: image
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Text style={styles.title}>Rhyme Search</Text>

          <TextInput
            style={styles.inputContainer}
            placeholder="Search a word"
            onChangeText={input => this.handleWordChange(input)}
            autoCapitalize="none"
            value={this.state.word}
          />
          <CustomButton
            onPress={word => this.handlePress(word)}
            color="#29aaf4"
          >
            Submit
          </CustomButton>

          <View style={{ height: "40%" }}>
            <ScrollView style={styles.historyContainer}>
              <View style={styles.itemList}>{listWords}</View>
            </ScrollView>
          </View>
          <CustomButton
            onPress={() => this.setState({ wordList: [] })}
            color="#DCDCDC"
          >
            Clear history
          </CustomButton>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    margin: 20,
    color: "purple",
    fontWeight: "bold"
  },
  inputContainer: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    width: "60%",
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#DCDCDC"
  },
  buttonStyle: {
    backgroundColor: "#DCDCDC",
    padding: 10,
    margin: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 5
  },
  historyContainer: {
    margin: 10,
    width: 200
  },
  itemList: {
    alignItems: "center"
  },
  TextStyle: {
    fontSize: 20,
    textAlign: "center"
  }
});
