/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import { SafeAreaView, StatusBar } from "react-native";

import Home from "./src/pages/home/Home";

import styles from "./src/styles/globalStyles";

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
