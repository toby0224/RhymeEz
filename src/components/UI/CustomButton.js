import React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet
} from "react-native";

const customButton = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text>{props.children}</Text>
    </View>
  );
  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
    );
  } else {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DCDCDC",
    padding: 10,
    margin: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 3
  }
});

export default customButton;
