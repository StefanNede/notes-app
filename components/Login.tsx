import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert} from "react-native";
import { windowWidth } from '../globals/ScreenSize';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({loginInfo, setLoginInfo, loggedIn, setLoggedIn, setProfile}: any){
    const [enteredUsername, setUsername] = useState("");
    const [enteredPassword, setPassword] = useState("");
    const correctInfo = {
        username: "stefan",
        password: "notes"
    };
    // stores the fact that the user has logged in on this app, so that the user doesn't need to log in each time they open the app
    // we will disable this whilst testing, as it interferes with the virtual device
    const storeLoggedIn = async () => {
        try {
          await AsyncStorage.setItem('has_logged_in', "true");
        } catch (e) {
            console.log("error whilst trying to save that the user has logged in");
        }
      }

    const createNotes = async () => {
        const notesBoilerplate = {
            "notes": [{
                "title": "first note",
                "description": "first description",
                "content": "first content",
                "date": "3rd March 2021"
            }]
        }
        const myjson = JSON.stringify(notesBoilerplate);

        try {
            await AsyncStorage.setItem('notes', myjson);
          } catch (e) {
              console.log("error whilst trying to save that the user has logged in");
          }
    }
    useEffect(()=>{
        storeLoggedIn();
        createNotes();
    }, [])

    function enterLoginInfo(){
        if (enteredUsername === correctInfo.username.toLowerCase() && enteredPassword === correctInfo.password){
            setLoggedIn(true);
            setProfile(enteredUsername);
            // storeData();
        }
        else {
            Alert.alert(
                "Invalid",
                "Username or password are incorrect",
                [
                    { text: "OK" }
                  ]
            );
        }
    }
    return (
        <View>
            <View style={styles.loginScreen}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TextInput  
                    style={styles.input}      
                    onChangeText={setUsername}
                    value={enteredUsername}
                    placeholder="username / email" 
                    placeholderTextColor = "gray"
                    autoCapitalize = 'none' />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TextInput        
                    style={styles.input}    
                    onChangeText={setPassword}
                    value={enteredPassword}
                    placeholder="password" 
                    placeholderTextColor = "gray"
                    autoCapitalize = 'none'
                    secureTextEntry  />
                </KeyboardAvoidingView>
                <TouchableOpacity onPress={enterLoginInfo} style={styles.button}>
                    <Text>Enter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginScreen: {
        height: '80%',
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        top: '5%'
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