import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {windowWidth} from '../globals/ScreenSize';
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Profile from "../pages/Profile";


export default function MainContent({page}:string|any){
    function setPage(){
        switch (page){
            case "Home":
                return <Home />
            case "Notes":
                return <Notes />
            case "Profile":
                return <Profile />
        }
    }
    return (
        <View style={styles.content}>
            {setPage()}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'lightgray',
        height: '100%',
        flex: 1,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
    }
});