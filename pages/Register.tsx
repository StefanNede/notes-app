// login page 
import * as React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList, Platform, KeyboardAvoidingView} from 'react-native';
import {windowHeight, windowWidth} from '../globals/ScreenSize';
import Signup from "../components/Signup";
import Login from "../components/Login";
import {regularFontSize, titleFontSize, smallFontSize} from "../globals/FontSize";

interface Login {
    username: string,
    password: string
}
interface Signup {
    username: string,
    email: string,
    password: string
}


export default function Register(){
    const [currentPage, setCurrentPage] = useState("sign up");
    const [signupInfo, setSignupInfo] = useState({    
        username: "",
        email: "",
        password: ""});
    const [loginInfo, setLoginInfo] = useState({
        username: "", 
        password: ""}); 
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
                <View style={styles.mainInfo}>
                    <View style = {styles.changeDisplay}>
                        <TouchableOpacity onPress={() => changePage("sign up")} style={[styles.changeDisplayButton, currentPage=="sign up" ? styles.onPage : styles.notOnPage]}>
                            <Text style={styles.buttonText}>sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changePage("log in")} style={[styles.changeDisplayButton, currentPage=="log in" ? styles.onPage : styles.notOnPage]}>
                            <Text style={styles.buttonText}>log in</Text>
                        </TouchableOpacity>
                    </View>
                    <KeyboardAvoidingView style={styles.mainRegisterArea} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        {/* rest of the page with text inputs */}
                        {currentPage === "sign up" ? <Signup /> : <Login loginInfo = {loginInfo} setLoginInfo = {setLoginInfo}/>}
                        <TouchableOpacity><Text style={styles.ContinueText}>Continue not logged in</Text></TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    mainInfo:{
        height: windowHeight - windowHeight*0.4,
        width: windowWidth,
        flex: 1,
        position: 'absolute',
        top: windowHeight * 0.4,
    },
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
    ContinueText: {
        textDecorationLine: 'underline',
    },
    mainRegisterArea: {
        position: 'relative',
        backgroundColor: '#FFFFFF50',
        width: windowWidth,
        height: windowHeight/2,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                height: windowHeight/1.8
            },
            android: {
                height: windowHeight/2
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
        height: windowHeight,
        flex: 1,
        justifyContent: 'space-between',
    },
    logo: {
        width: windowWidth/2.6,
        height: windowWidth/2.6,
        borderRadius: 100,
        backgroundColor: '#fff',
        position: 'absolute',
        borderColor: 'black',
        borderWidth: 1,
    },
    logoContainer: { 
        alignSelf: 'center',
        position: "absolute",
        backgroundColor: 'gray',
        width: windowWidth/2.6,
        height: windowWidth/2.6,
        borderRadius: windowWidth/5.2,
        shadowColor: "black",
        shadowOffset: { height: 0, width:0},
        shadowOpacity: 0.5,
        top: windowHeight/8,
    },
    changeDisplay: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: windowWidth,
    },
    buttonText: {
        fontSize: titleFontSize -5,
    },
});