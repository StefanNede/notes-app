import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {windowWidth, windowHeight} from "../globals/ScreenSize"; 
import {lightTextColor} from "../globals/Colours";
import{regularFontSize, titleFontSize, smallFontSize} from "../globals/FontSize"

export default function Home(){
    const username: string = "Hello";
    return (
        <View>
            <Image source={require("../assets/backgrounds/otherbg.png")} style={styles.backgroundImage}></Image>
            <View style={styles.content}>
                <Text style={styles.maintext}>Home</Text>
                <Text style={styles.maintext}>I didn't know what to write here :}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
    },
    content: {
        position: 'absolute',
        height: '100%',
        flex: 1,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    maintext: {
        color: lightTextColor,
        fontSize: titleFontSize
    },
});