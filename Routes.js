import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  tabBarOptions
} from "react-navigation";

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
  // "Equivalent"
  Equivalent: {
    screen: Equivalent
  },
  // "Synonym"
  Synonym: {
    screen: Synonym
  },
  // "Antonym"
  Antonym: {
    screen: Antonym
  }
});
export default createAppContainer(Project);
