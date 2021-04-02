import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import {windowWidth, windowHeight} from "../globals/ScreenSize";
import Note from "../components/Note";
// import WriteNote from "../components/WriteNote";

export default function Notes(){
    const [notes, setNotes] = useState([{
        title: "first note",
        description: "this is the first note",
        content: "Hello everyone, this is the first note that I have written. I hope that you all enjoy it a lot",
        dateWritten: "2nd April",
    }, {
        title: "second note",
        description: "this is the second note, isn't it nice?",
        content: "Hello everyone, this is the second note that I have written. I hope that you all enjoy it a lot",
        dateWritten: "2nd April",
    }]);
    return (
        <View>
            <Image source={require("../assets/backgrounds/otherbg.png")} style={styles.backgroundImage}></Image>
            <ScrollView>
                {
                    notes.map((note)=>{
                        // making sure that the notes have a different key
                        return <Note key={Math.random()*notes.length + 1000} note={note}/>
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        left: -10,
    },
});