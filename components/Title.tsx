import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import {windowHeight, windowWidth} from '../globals/ScreenSize';
import {titleFontSize} from "../globals/FontSize";
import {bgColor1, lightTextColor} from "../globals/Colours";

export default function Title({title}:any) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titletext}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: windowWidth,
        height: windowHeight*0.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor1,
        borderBottomWidth: 1,
        borderColor: lightTextColor,
        ...Platform.select({
            ios: {
                paddingTop: 20,
                paddingBottom: 10,
            },
            android:{
                paddingTop: 5,
            }
        }),
    },
    titletext: {
        top: 10,
        position: 'relative',
        fontSize: titleFontSize,
        color: lightTextColor,
    },
})