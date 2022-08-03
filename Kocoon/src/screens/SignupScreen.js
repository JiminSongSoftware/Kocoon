import React, {useState} from "react";
import {View, Text, Image, TextInput, StyleSheet, Button, } from 'react-native';
import CustomButton from "../components/CustomButton";
import Link from "../components/Link";

function SignupScreen({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img} />
            <Text style={styles.text}>SIGN UP</Text>
            <TextInput 
                value={name}
                autoCorrect={false}
                placeholder='Full name'
                onChangeText={setName}
                style={styles.textInput}
            />
            <TextInput 
                value={email}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='School email'
                onChangeText={setEmail}
                style={styles.textInput}
            />
            <TextInput 
                value={password}
                secureTextEntry
                placeholder='Password'
                onChangeText={setPassword}
                style={styles.textInput}
            />
            <TextInput 
                value={confirmPassword}
                secureTextEntry
                placeholder='Re-type Password'
                onChangeText={setConfirmPassword}
                style={styles.textInput}
            />
            <CustomButton text='Sign up' onPress={()=>{navigation.navigate('Confirmation')}} />
            <View style={{flexDirection:'row', }}>
                <Text>Already have an account? </Text>
                <Link text='log in' onPress={()=>{navigation.navigate('Login')}} />
            </View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DED6D3',
    },
    text: {
        fontSize:28,
    },
    img: {
        width: 204,
        height: 184,
    },
    textInput: {
        margin: 10,
        width: 285,
        padding: 4,
        fontSize:18,
        color: '#103025',
        borderBottomWidth: 1,
    },
});

export default SignupScreen;