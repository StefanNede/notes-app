import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
        position: 'relative',
        paddingTop: windowHeight/13,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        flex: 1,
        alignItems: 'center',
        backgroundColor: bgColor1,
    },
    titletext: {
        position: 'relative',
        bottom: 10,
        fontSize: titleFontSize,
        color: lightTextColor,
    },
})