import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {windowHeight, windowWidth} from "../globals/ScreenSize";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {regularFontSize, titleFontSize, smallFontSize} from "../globals/FontSize";
import {bgColor1, bgColor2, lightTextColor, notesBackgroundColor} from "../globals/Colours";

export default function Profile({profile, setLoggedIn}: any){
    function logOut(){
        setLoggedIn(false);
        AsyncStorage.removeItem('has_logged_in');
    }
    return (
        <View>
            <Image source={require("../assets/backgrounds/otherbg.png")} style={styles.backgroundImage}></Image>
            <ScrollView style={{position:'absolute', height:'100%'}}>
                <View style={styles.container}>
                    <Text style={styles.maintext}>Logged in as {profile}</Text>
                    <TouchableOpacity onPress={logOut} style={styles.logoutButton}>
                        <Text style={styles.logout}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
    },
    container:{
        width: windowWidth,
        height: windowHeight*0.82,
        alignItems: 'center',
        justifyContent: 'center'
    },
    maintext:{
        fontSize:titleFontSize, 
        color: lightTextColor
    },
    logoutButton: {
        backgroundColor: lightTextColor,
        padding: 20,
        borderRadius: 50,
        marginTop: 20,
    },
    logout: {
        fontSize:regularFontSize, 
    },
});