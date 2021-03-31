import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {windowHeight, windowWidth} from '../globals/ScreenSize';
import {titleFontSize} from "../globals/FontSize";
import Title from "./Title";
import {bgColor1, bgColor2, lightTextColor} from "../globals/Colours";
import MainContent from "./MainContent";

export default function Nav(){
    const [activePage, setActivePage] = useState("Home");
    function changePage(pageClicked:string){
        setActivePage(pageClicked);
    };
    return (
        <View>
            <View>
                <Title title={activePage.toLowerCase()} />
            </View>
            <View style={styles.mainContent}>
                <MainContent page={activePage}/>
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
    navbar: {
        backgroundColor: bgColor1,
        position: 'absolute',
        top: windowHeight - windowHeight/10,
        height: windowHeight/7,
        borderTopWidth: 1,
        borderColor: 'lightgray',
        width: windowWidth,
        flex: 1,
        paddingTop: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                height: windowHeight - windowHeight/1.13,
                top: windowHeight - windowHeight/10,
            },
            android: {
                height: windowHeight - windowHeight/1.21,
                top: windowHeight - windowHeight/7,
            },
          }),
    },
    mainContent: {
        height: windowHeight/1.2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: lightTextColor,
    },
});