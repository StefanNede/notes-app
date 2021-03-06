import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import {windowWidth, windowHeight} from "../globals/ScreenSize";
import Note from "../components/Note";
import WriteNote from "../components/WriteNote";
import {bgColor1, lightTextColor} from "../globals/Colours";

export default function Notes(){
    const [writeView, setWriteView] = useState(false);
    function writeNote(){
        setWriteView(true);
    }
    const [notes, setNotes] = useState([{
        title:"sample note",
        description: "this is the description",
        content: "this is the content",
        dateWritten: "3rd March 2021"
    }]);
    return (
        <View>
            <Image source={require("../assets/backgrounds/otherbg.png")} style={styles.backgroundImage} />
            {writeView ? <WriteNote setWriteView={setWriteView} notes={notes} setNotes={setNotes}/> :
            <View>
                <ScrollView>
                    {
                        notes.map((note)=>{
                            // making sure that the notes have a different key
                            return <Note key={Math.random()*notes.length + 1000} note={note} setNotes={setNotes} notes={notes}/>
                        })
                    }
                </ScrollView>
                <TouchableOpacity style={styles.addNote} onPress={writeNote}>
                    <Text style={styles.add}>+</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        left: windowWidth*0.9 - windowWidth
    },
    addNote: {
        height: 50,
        width: 50,
        backgroundColor: bgColor1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        left: windowWidth*0.8,
        borderWidth: 1,
        borderColor: '#2B5395',
        elevation: 10,
        shadowOffset: { height: 0, width:0},
        shadowOpacity: 0.5,
        position: 'absolute'
    },
    add :{
        fontSize: 30,
        color: lightTextColor,
    }
});