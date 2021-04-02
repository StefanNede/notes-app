import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {windowWidth} from "../globals/ScreenSize";
import {regularFontSize, titleFontSize, smallFontSize} from "../globals/FontSize";
import {bgColor1, bgColor2, lightTextColor, notesBackgroundColor} from "../globals/Colours";
import ViewNote from "./ViewNote";

export default function Note({note}: any){
    const [noteOpen, setNoteOpen] = useState(false);
    function openNote(){
        setNoteOpen(true);
    };
    return (
        <View>
            {noteOpen ? <ViewNote note={note} setNoteOpen={setNoteOpen}/> : <TouchableOpacity style={styles.NoteContainer} onPress={openNote}>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.noteDescription}>{note.description}</Text>
                <Text style={styles.noteDate}>{note.dateWritten}</Text>
            </TouchableOpacity>}
        </View>
    )
};

const styles = StyleSheet.create({
    NoteContainer: {
        margin: 10,
        width: windowWidth*0.9,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: notesBackgroundColor,
        borderRadius: 33,
        shadowColor: "black",
        shadowOffset: { height: 2.5, width:0},
        shadowOpacity: 0.5,
        elevation: 10
    },
    noteTitle:{
        fontSize: titleFontSize,
    },
    noteDescription: {
        fontSize: regularFontSize,
    },
    noteDate: {
        fontSize: smallFontSize
    }
});