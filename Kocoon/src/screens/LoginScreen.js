import React, {useState} from "react";
import {View, Text, Image, TextInput, StyleSheet, Button, } from 'react-native';
import CustomButton from "../components/CustomButton";
import Link from "../components/Link";

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img} />
            <Text style={styles.text}>LOGIN</Text>
            <TextInput 
                value={email}
                placeholder='Username'
                placeholderTextColor="#000" 
                onChangeText={setEmail}
                style={styles.textInput}
            />
            <View>
                <TextInput 
                    value={password}
                    placeholder='Password'
                    placeholderTextColor="#000"
                    onChangeText={setPassword}
                    style={styles.textInput}
                />
                <View style={styles.linkContainer}>
                    <Link text='forgot password?' onPress={()=>{navigation.navigate('ForgotPassword')}} />
                </View>
            </View>
            <CustomButton text='Login' onPress={()=>{navigation.navigate('MainFlow')}} />
            <View style={{flexDirection:'row', }}>
                <Text>don't have an account? </Text>
                <Link text='sign up' onPress={()=>{navigation.navigate('Signup')}} />
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
        fontSize:20,
        color: '#103025',
        borderBottomWidth: 1,
    },
    linkContainer: {
        alignSelf: 'flex-end',
    }
});

export default LoginScreen;