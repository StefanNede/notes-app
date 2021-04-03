import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Alert} from "react-native";
import { windowWidth, windowHeight } from '../globals/ScreenSize';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup(props:any){
    const [enteredUsername, setUsername] = useState("");
    const [enteredEmail, setEmail] = useState("");
    const [enteredPassword, setPassword] = useState("");
    const [person, setPerson] = useState({});

    const storeLoggedIn = async () => {
        try {
          await AsyncStorage.setItem('has_logged_in', "true");
        } catch (e) {
            console.log("error whilst trying to save that the user has logged in");
        }
      }
    const createNotes = async () => {
        try {
            await AsyncStorage.setItem('notes', "");
          } catch (e) {
              console.log("error whilst trying to save that the user has logged in");
          }
    }
    useEffect(()=>{
        storeLoggedIn();
        createNotes();
    }, [])

    function enterSignupInfo(){
        if (enteredEmail.includes('@')){
            props.setLoggedIn(true);
            props.setProfile(enteredUsername);
        }
        else {
            Alert.alert(
                "Invalid",
                "Email does not exist",
                [
                    { text: "OK" }
                  ]
            )
        }
    }


    return (
        <View>
            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.signupScreen}>
                <TextInput        
                onChangeText={setUsername}
                value={enteredUsername}
                placeholder="username" 
                placeholderTextColor = "gray"
                autoCapitalize = 'none'
                style={styles.input} />
                <TextInput        
                onChangeText={setEmail}
                value={enteredEmail}
                placeholder="email" 
                placeholderTextColor = "gray"
                autoCapitalize = 'none' 
                style={styles.input}/> 
                <TextInput        
                onChangeText={setPassword}
                value={enteredPassword}
                placeholder="password" 
                placeholderTextColor = "gray"
                autoCapitalize = 'none'
                secureTextEntry  
                style={styles.input}/>
                <TouchableOpacity onPress={enterSignupInfo} style={styles.button}>
                    <Text>Enter</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    signupScreen: {
        height: '80%',
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        top: '5%',
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: { height: 0, width:0},
        shadowOpacity: 0.5,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        top: 20,
        backgroundColor: 'lightgray',
        borderRadius: 100,
        paddingHorizontal: windowWidth/10,
        paddingVertical: 5,
    },
});