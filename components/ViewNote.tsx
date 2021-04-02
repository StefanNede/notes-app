import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {windowWidth, windowHeight} from "../globals/ScreenSize";
import {regularFontSize, titleFontSize, smallFontSize} from "../globals/FontSize";
import {bgColor1, bgColor2, lightTextColor, notesBackgroundColor} from "../globals/Colours";

export default function ViewNote({note, setNoteOpen}:any){
    function closeOpenView(){
        setNoteOpen(false);
    }
    return(
        <View style={styles.viewNote}>
            <ScrollView>
                <TouchableOpacity onPress={closeOpenView}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <Text>{note.title}</Text>
                <Text>{note.description}</Text>
                <Text>{note.content}</Text>
                <Text>{note.dateCreated}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    viewNote:{
        backgroundColor: notesBackgroundColor,
        width: windowWidth*0.9,
        marginLeft: windowWidth*0.025,
        marginBottom: 10,
        marginTop: 10,
    },
});