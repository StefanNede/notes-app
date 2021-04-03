import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {windowWidth, windowHeight} from "../globals/ScreenSize";
import {regularFontSize, titleFontSize, smallFontSize} from "../globals/FontSize";
import {bgColor1, bgColor2, lightTextColor, notesBackgroundColor} from "../globals/Colours";

export default function ViewNote({note, setNoteOpen, setNotes, notes}:any){
    function closeOpenView(){
        setNoteOpen(false);
    }
    function deleteNote(){
        const allNotes = notes;
        const afterNotes = [];
        allNotes.forEach((allNote, index)=>{
            if (allNote!== note){
                afterNotes.push(allNote);
            }
        })
        setNotes(afterNotes);
    }
    return(
        <View style={styles.viewNote}>
            <ScrollView>
                <TouchableOpacity onPress={closeOpenView}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteNote} style={styles.delete}>
                    <Text>Delete note</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{note.title}</Text>
                <Text style={styles.text}>{note.description}</Text>
                <Text style={styles.text}>{note.content}</Text>
                <Text style={styles.text}>{note.dateCreated}</Text>
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
    text: {
        alignSelf: 'center'
    },
    delete: {
        alignSelf: 'flex-end',
        position: 'absolute'
    }
});