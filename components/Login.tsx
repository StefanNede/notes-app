import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert} from "react-native";
import { windowWidth } from '../globals/ScreenSize';

export default function Signup({loginInfo, setLoginInfo, loggedIn, setLoggedIn}: any){
    const [enteredUsername, setUsername] = useState("");
    const [enteredPassword, setPassword] = useState("");
    const correctInfo = {
        username: "stefan",
        password: "notes"
    };
    function enterLoginInfo(){
        if (enteredUsername === correctInfo.username.toLowerCase() && enteredPassword === correctInfo.password){
            setLoggedIn(true);
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
            <KeyboardAvoidingView style={styles.loginScreen} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput  
                style={styles.input}      
                onChangeText={setUsername}
                value={enteredUsername}
                placeholder="username / email" 
                placeholderTextColor = "gray"
                autoCapitalize = 'none' />
                <TextInput        
                style={styles.input}    
                onChangeText={setPassword}
                value={enteredPassword}
                placeholder="password" 
                placeholderTextColor = "gray"
                autoCapitalize = 'none'
                secureTextEntry  />
                <TouchableOpacity onPress={enterLoginInfo} style={styles.button}>
                    <Text>Enter</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    loginScreen: {
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