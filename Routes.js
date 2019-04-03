import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Welcome from "./src/Screens/Welcome";
import Rhyme from "./src/Screens/Rhyme";
import Synonym from "./src/Screens/Synonym";
import Antonym from "./src/Screens/Antonym";
import Equivalent from "./src/Screens/Equivalent";

const Project = createStackNavigator({
  // "Welcome"
  Welcome: {
    screen: Welcome
  },
  // "Rhyme"
  Rhyme: {
    screen: Rhyme
  },
  // "Synonym"
  Synonym: {
    screen: Synonym
  },
  // "Antonym"
  Antonym: {
    screen: Antonym
  },
  // "Equivalent"
  Equivalent: {
    screen: Equivalent
  }
});
export default createAppContainer(Project);
