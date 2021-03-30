import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../globals/ScreenSize';
import {titleFontSize} from "../globals/FontSize";
import Title from "./Title";

export default function Nav(){

    const [activePage, setActivePage] = useState("home");
    function changePage(pageClicked:string){
        setActivePage(pageClicked);
    };

    return (
        <View>
            <View>
                <Title title={activePage} />
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={()=> changePage("profile")}>
                    <Text>profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> changePage("home")}>
                    <Text>home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> changePage("notes")}>
                    <Text>notes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        marginTop:windowHeight/1.1,
        borderTopWidth: 1,
        borderColor: 'gray',
        width: windowWidth,
        flex: 1,
        paddingTop: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
});