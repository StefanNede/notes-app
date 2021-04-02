import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {windowWidth, windowHeight} from "../globals/ScreenSize"; 

export default function Home(){
    const username: string = "Hello";
    return (
        <View>
            <Image source={require("../assets/backgrounds/otherbg.png")} style={styles.backgroundImage}></Image>
            <View style={styles.content}>
                <Text>Home</Text>
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
    } 
});