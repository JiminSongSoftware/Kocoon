import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, Button, } from 'react-native';
import CustomButton from "../components/CustomButton";
import Link from "../components/Link";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img} />
            <Text style={styles.text}>LOGIN</Text>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                placeholder='Username'
                placeholderTextColor="#000"
                onChangeText={setEmail}
                style={styles.textInput}
            />
            <TextInput
                secureTextEntry={true}
                value={password}
                placeholder='Password'
                placeholderTextColor="#000"
                onChangeText={setPassword}
                style={styles.textInput}
            />
            <View style={styles.linkContainer}>
                <Link link='forgot password?' onPress={()=>{navigation.navigate('ForgotPassword')}} />
            </View>
            <CustomButton text='Login' onPress={() => { navigation.navigate('MainFlow') }} />
            <Link text="don't have an account? " link='sign up' onPress={() => { navigation.navigate('Signup') }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DED6D3',
    },
    text: {
        fontSize: 28,
    },
    img: {
        width: 204,
        height: 184,
    },
    textInput: {
        margin: 10,
        width: '100%',
        padding: 4,
        fontSize: 18,
        color: '#103025',
        borderBottomWidth: 1,
    },
    linkContainer: {
        alignSelf: 'flex-end',
    }
});

export default LoginScreen;