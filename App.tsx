import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Title from "./components/Title";
import {windowHeight, windowWidth} from './globals/ScreenSize';
import Nav from "./components/Nav";
import Register from "./pages/Register";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState("");

  const checkIfLoggedIn = async () => {
    try {
      const value = await AsyncStorage.getItem('has_logged_in')
      if(value !== null) {
        setLoggedIn(true);
      }
    } catch(e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    checkIfLoggedIn();  
  }, [])
  
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