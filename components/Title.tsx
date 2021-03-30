import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../globals/ScreenSize';
import {titleFontSize} from "../globals/FontSize";

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
        paddingTop: windowHeight/15,
        width: windowWidth,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        flex: 1,
        alignItems: 'center',
    },
    titletext: {
        position: 'relative',
        bottom: 10,
        fontSize: titleFontSize,
    },
})