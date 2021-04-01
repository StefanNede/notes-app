import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import { windowWidth } from '../globals/ScreenSize';

export default function Signup({loginInfo, setLoginInfo}: any){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function enterLoginInfo(){
        setUsername("");
        setPassword("");
        setLoginInfo(
            {
                username: username,
                password: password
            }
        )
    }
    return (
        <View>
            <KeyboardAvoidingView style={styles.loginScreen} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput  
                style={styles.input}      
                onChangeText={setUsername}
                value={username}
                placeholder="username / email" 
                placeholderTextColor = "gray" />
                <TextInput        
                style={styles.input}    
                onChangeText={setPassword}
                value={password}
                placeholder="password" 
                placeholderTextColor = "gray" />
                <TouchableOpacity onPress={() => enterLoginInfo()} style={styles.button}>
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