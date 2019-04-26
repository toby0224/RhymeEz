import React, { Component } from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "./CustomButton";

import Details from "./Details";

class DefinitionModal extends Component {
  state = {
    //definition: this.props.definition,
    modalVisible: this.props.visible,
    selectedWord: this.props.selectedWord // receive selected word from parent
  };

  closeModal() {
    this.setState({
      modalVisible: false
    });
    this.props.closeModal(); // trigger method of parent compoenent to close modal
  }

  displayDefinition(definition) {
    // need to handle TypeError
    if (definition == null || definition === undefined)
      return <Text style={{ textAlign: "center" }}>An error occurred</Text>;
    else {
      return definition.map((
        index,
        i //
      ) => (
        <View key={i}>
          <Details partOfSpeech={index.partOfSpeech} text={index.text} />
        </View>
      ));
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.containerStyle}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.definitionContainer}>
                <Text style={styles.title}>{this.props.selectedWord}</Text>
                <View style={styles.innerDefinition}>
                  {this.displayDefinition(this.props.definition)}
                </View>
              </View>
            </ScrollView>
            <View>
              <CustomButton
                color="#29aaf4"
                onPress={() => {
                  this.closeModal();
                }}
              >
                Close
              </CustomButton>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default DefinitionModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  containerStyle: {
    width: "80%",
    height: "70%",
    margin: "auto",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 2,
    borderColor: "black",
    borderWidth: 0.5
  },
  title: {
    fontSize: 30,
    margin: 20,
    borderBottomWidth: 0.5
  },
  definitionContainer: {
    alignItems: "center"
  },
  innerDefinition: {
    width: "90%",
    height: "80%"
  }
});
