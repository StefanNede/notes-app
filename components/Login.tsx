import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView} from "react-native";

export default function Login(){
    return (
        <KeyboardAvoidingView>
            <TextInput>Username</TextInput>
            <TextInput>Email</TextInput>
            <TextInput>Password</TextInput>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({});