import React from "react";
import {View, Text, TextInput, StyleSheet, } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function SearchBar({term, onChangeText}) {

    return(
        <View style={styles.container} >
            <EvilIcons name="search" size={24} color="black" style={styles.iconSty} />
            <TextInput 
                style={styles.textInputSty}
                placeholder="Search"
                value={term}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 15,
        height: 45,
        backgroundColor:'#979797',
        borderRadius: 6,
    },
    textInputSty: {
        flex: 1,
        fontSize: 18,
    },
    iconSty: {
        alignSelf: 'center',
        fontSize: 35, 
        marginHorizontal: 15
    },
});