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

import API from "../../backend/api";

class Welcome extends Component {
  state = {
    word: "",
    wordList: [],
    resObj: {}
  };

  componentDidMount() {
    API.apiRequest().then(res => {
      this.setState({
        resObj: res
      });
    });
  }

  handleWordChange = word => {
    this.setState({ word: word });
  };

  clearField = () => {
    this.setState({
      word: ""
    });
  };

  handleSubmit = () => {
    if (this.state.word) {
      this.state.wordList.push(this.state.word);
      // pass word props to Rhyme screen
      this.props.navigation.navigate("Rhyme", { wordd: this.state.word });
      this.clearField();
    }
  };

  render() {
    const image =
      "http://s.facegfx.com/image/2014/8/21/alphabet-gray-background-vector-graphics-free.jpg";

    const listWords = this.state.wordList
      .slice(0)
      .reverse()
      .map((item, key) => (
        <Text style={styles.wordStyle} key={key}>
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
            onPress={word => {
              this.handleSubmit(word);
            }}
            color="#29aaf4"
          >
            Submit
          </CustomButton>

          <View style={styles.historyContainer}>
            <ScrollView
              style={styles.historyScrollView}
              showsVerticalScrollIndicator={false}
            >
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
    marginTop: 0,
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
    backgroundColor: "transparent",
    backgroundColor: "rgba(52, 52, 52, 0.1)"
  },
  historyContainer: {
    height: "40%",
    width: "100%",
    alignItems: "center"
  },

  historyScrollView: {
    margin: 10,
    width: 240,
    backgroundColor: "rgba(52, 52, 52, 0.1)",
    borderRadius: 5
  },
  itemList: {
    alignItems: "center",
    padding: 5
  },
  wordStyle: {
    fontSize: 20,
    textAlign: "center",
    color: "grey"
  }
});
