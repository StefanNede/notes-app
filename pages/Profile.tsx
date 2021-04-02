import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {windowHeight, windowWidth} from "../globals/ScreenSize";
export default function Profile({profile, setLoggedIn}: any){
    function logOut(){
        setLoggedIn(false);
    }
    return (
        <View>
            <Image source={require("../assets/backgrounds/otherbg.png")} style={styles.backgroundImage}></Image>
            <ScrollView style={styles.container}>
                <Text>Logged in as {profile}</Text>
                <TouchableOpacity onPress={logOut}>
                    <Text>Log out</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
    },
    container:{
        position:'absolute',
    }
});