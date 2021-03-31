import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {windowWidth} from "../globals/ScreenSize"; 

export default function Home(){
    const username: string = "Hello";
    return (
        <View style={styles.content}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        height: '100%',
        flex: 1,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
    } 
});