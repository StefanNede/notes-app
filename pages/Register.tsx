// login page 
import * as React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList, Platform, KeyboardAvoidingView} from 'react-native';
import {windowHeight, windowWidth} from '../globals/ScreenSize';
import Signup from "../components/Signup";
import Login from "../components/Login";

export default function Register(){
    const [currentPage, setCurrentPage] = useState("sign up");
    function changePage(newPage:string){
        setCurrentPage(newPage);
    }
    return(
    <View style={styles.container}>
        <Image source={require("../assets/backgrounds/loginbg.png")} style={styles.backgroundImage}></Image>
        <View>
            <View style={styles.mainView}>
                <View style={styles.logoContainer}>
                    <Image source={require("../assets/images/icon.png")} style = {styles.logo}>
                    </Image>
                </View>
                <KeyboardAvoidingView style = {styles.changeDisplay} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TouchableOpacity onPress={() => changePage("sign up")} style={[styles.changeDisplayButton, currentPage=="sign up" ? styles.onPage : styles.notOnPage]}>
                        <Text>sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changePage("log in")} style={[styles.changeDisplayButton, currentPage=="log in" ? styles.onPage : styles.notOnPage]}>
                        <Text>log in</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.mainRegisterArea} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    {/* rest of the page with text inputs */}
                    {currentPage === "sign up" ? <Signup /> : <Login />}
                    <Text style={styles.ContinueText}>Continue not logged in</Text>
                </KeyboardAvoidingView>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    onPage: {
        backgroundColor: '#FFFFFF50',
    },
    notOnPage: {
        backgroundColor: '#FFFFFF25',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight,
        width: windowWidth,
    },
    backgroundImage: {
        position: 'absolute',
        flex: 1,
        width: windowWidth,
        height: windowHeight+10,
    },
    ContinueText: {},
    mainRegisterArea: {
        position: 'absolute',
        backgroundColor: '#FFFFFF50',
        width: windowWidth,
        height: windowHeight/1.9,
        top:windowHeight -  windowHeight/1.9 - 98,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                top:windowHeight -  windowHeight/1.9 -windowHeight/16.8,
            },
            android: {
                top:windowHeight -  windowHeight/1.9 - windowHeight/7.8,
            },
          }),
    },
    changeDisplayButton: {
        height: '100%',
        width: '50%',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
    },
    mainView: {
        width: windowWidth,
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    logo: {
        width: windowWidth/2.6,
        height: windowWidth/2.6,
        borderRadius: windowWidth/5.2,
        backgroundColor: '#fff',
        position: 'absolute',
        borderColor: 'black',
        borderWidth: 1,
    },
    logoContainer: { 
        backgroundColor: 'gray',
        width: windowWidth/2.6,
        height: windowWidth/2.6,
        borderRadius: windowWidth/5.2,
        shadowColor: "black",
        shadowOffset: { height: 0, width:0},
        shadowOpacity: 0.5,
        top: windowHeight/19,
        ...Platform.select({
            ios: {
                top: windowHeight/12
            },
            android: {
            },
          }),
    },
    changeDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
        width: windowWidth,
        top: windowHeight/1.75 - windowHeight/2.25, 
        ...Platform.select({
            ios: {
                top: windowHeight/1.56 - windowHeight/2.25 - 3.4,
            },
            android: {
                top: windowHeight/1.80 - windowHeight/2.25 + 0.6,
            },
          }),
    }
});