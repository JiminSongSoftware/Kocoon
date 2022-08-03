import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

function StartingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.image} />
            <Text style={styles.text}>Learn to Grow</Text>
            <TouchableOpacity
                onPress={()=>{navigation.navigate('Login')}}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText} >Login</Text>
                </View>
            </TouchableOpacity>
            <Text style={{fontSize:18}}>or</Text>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Signup')
                }}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText} >Sign up</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DED6D3',
    },
    image: {
        margin: 15,
        width:275,
        height: 242,
    },
    text: {
        margin: 15,
        fontSize: 24,
    },
    button: {
        margin: 15,
        width: 219,
        height:48,
        backgroundColor: '#000000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize:20,
        color: 'white',
    },
})

export default StartingScreen;