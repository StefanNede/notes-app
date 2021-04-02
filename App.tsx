import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Title from "./components/Title";
import {windowHeight, windowWidth} from './globals/ScreenSize';
import Nav from "./components/Nav";
import Register from "./pages/Register";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [loggedIn, setLoggedIn] = useState("");
  const [profile, setProfile] = useState("");
  // this needs to be a local store, so that the user doesn't have to log in each time they open the app
  // we will disable this whilst testing, as it interferes with the virtual device
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('has_logged_in')
  //     if(value !== null) {
  //       setLoggedIn(true);
  //     }
  //   } catch(e) {
  //     console.log("an error ocurred whilst checking if the user has logged in");
  //   }
  // }
  // getData();
  return (
    <View style={styles.main}>
      {loggedIn === true ? <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} profile={profile}/> : <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} profile={profile} setProfile={setProfile}/> }
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
  },
});