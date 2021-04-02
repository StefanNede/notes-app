import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {windowHeight, windowWidth} from '../globals/ScreenSize';
import {titleFontSize} from "../globals/FontSize";
import Title from "./Title";
import {bgColor1, bgColor2, lightTextColor} from "../globals/Colours";
import MainContent from "./MainContent";

export default function Nav({loggedIn, setLoggedIn, profile}: any){
    const [activePage, setActivePage] = useState("Home");
    function changePage(pageClicked:string){
        setActivePage(pageClicked);
    };
    function goOut(){
        setLoggedIn(false);
    }
    return (
        <View style={styles.container}>
            <View>
                <Title title={activePage.toLowerCase()} />
            </View>
            <View style={styles.mainContent}>
                <MainContent page={activePage} profile={profile} setLoggedIn={setLoggedIn}/>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={()=> changePage("Profile")}>
                    <Text style={styles.text}>profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> changePage("Home")}>
                    <Text style={styles.text}>home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> changePage("Notes")}>
                    <Text style={styles.text}>notes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    navbar: {
        borderTopWidth: 1,
        borderColor: lightTextColor,     
        backgroundColor: bgColor1,
        width: windowWidth,
        height: windowHeight*0.09,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                paddingBottom: 30,
            },
        }),
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                height: windowHeight*0.82,
            },
            android: {
                height: windowHeight*0.75,
            },
        }),
    },
    text: {
        color: lightTextColor,
    },
});