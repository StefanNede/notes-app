import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Title from "./components/Title";
import {windowHeight, windowWidth} from './globals/ScreenSize';
import Nav from "./components/Nav";
import Register from "./pages/Register";

export default function App() {
  const [loggedIn, setLoggedIn] = useState("");
  return (
    <View style={styles.main}>
      {loggedIn === true ? <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> : <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
  },
});