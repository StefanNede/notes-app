import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Title from "./components/Title";
import {windowHeight, windowWidth} from './globals/ScreenSize';
import Nav from "./components/Nav";
import Register from "./pages/Register";

export default function App() {
  return (
    <View style={styles.main}>
      {/* <Nav /> */}
      <Register />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
  },
});