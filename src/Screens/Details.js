import React from "react";

import { Text, View, Button, Modal } from "react-native";

const definition = props => {
  <Modal>
    <View>
      <Text>{props.word}</Text>
      <Text>{props.definition}</Text>
    </View>
  </Modal>;
};

export default definition;
