import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Title from "./components/Title";
import {windowHeight, windowWidth} from './globals/ScreenSize';
import Nav from "./components/Nav";

export default function App() {
  return (
    <View style={styles.main}>
      <Nav />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute'
  },
});
