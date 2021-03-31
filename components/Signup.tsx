import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform} from "react-native";

export default function Signup(){
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TextInput>Username/email</TextInput>
            <TextInput>Password</TextInput>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({});