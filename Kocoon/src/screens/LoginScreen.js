import React, {useState} from "react";
import {View, Text, Image, TextInput, StyleSheet, } from 'react-native';

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img} />
            <TextInput 

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 204,
        height: 184,
    }
});

export default LoginScreen;