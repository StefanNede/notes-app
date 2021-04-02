import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { windowHeight, windowWidth } from "../globals/ScreenSize";
import {regularFontSize, titleFontSize} from "../globals/FontSize"; 
import {lightTextColor} from "../globals/Colours";

export default function WriteNote({setWriteView, notes, setNotes}: any) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const getDateWritten = () =>{
        const date:object|any = new Date();
        const day:number = date.getDate();
        const monthNumber:number = date.getMonth(); // the month starts at 0
        const month_number_to_word:Array<string> = ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'];
        const month:string = month_number_to_word[monthNumber];
        const year:number = date.getFullYear();
        return `${day} ${month} ${year}`; 
    }
    const saveNote = () =>{
        const dateWritten = getDateWritten();
        setNotes([...notes, {
            title: title,
            description: description,
            content: content,
            dateWritten: dateWritten,
        }])
        setWriteView(false);
    }
    const deleteNote = () =>{
        setWriteView(false);
    }
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder="title" 
            style={styles.noteTitle}
            value={title}
            onChangeText={setTitle} />
            <TextInput 
            placeholder="description" 
            style={styles.noteDescription} 
            value = {description}
            onChangeText={setDescription} />
            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput 
                placeholder="Write a note" 
                multiline
                style={styles.noteInput}
                value = {content}
                onChangeText={setContent} />
            </KeyboardAvoidingView>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={saveNote} style={styles.button}>
                    <Text style={{fontSize: regularFontSize}}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteNote} style={styles.button}>
                    <Text style={{fontSize: regularFontSize}}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top: 10,
    },
    button: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        bottom: 45,
    },
    noteInput: {
        height: '80%',
        borderWidth: 1,
        width: windowWidth*0.8,
        paddingHorizontal: 10,
        textAlignVertical: 'top', // for android
        fontSize: regularFontSize + 5,
        color: 'lightgray',
    },
    noteDescription: {
        marginBottom: 10,
        fontSize: regularFontSize,
    },
    buttons:{
        flexDirection: 'row',
        width: windowWidth,
        justifyContent: 'space-around',
    },
    noteTitle:{
        fontSize: titleFontSize,
        color: lightTextColor
    },
});