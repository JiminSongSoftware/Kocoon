import React, {useState} from "react";
import {View, Text, Image, TextInput, StyleSheet, Button, } from 'react-native';
import CustomButton from "../components/CustomButton";

function ChangePasswordScreen({navigation}) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img} />
            <Text style={styles.text}>LOGIN</Text>
            <TextInput 
                value={password}
                placeholder='Password'
                placeholderTextColor="#000" 
                onChangeText={setPassword}
                style={styles.textInput}
            />
            <TextInput 
                value={confirmPassword}
                placeholder='Re-type password'
                placeholderTextColor="#000" 
                onChangeText={setConfirmPassword}
                style={styles.textInput}
            />
            <CustomButton text='Confirm' onPress={()=>{navigation.navigate('Login')}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 40,
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
        width: '100%',
        padding: 4,
        fontSize:20,
        color: '#103025',
        borderBottomWidth: 1,
    },
    linkContainer: {
        alignSelf: 'flex-end',
    }
});

export default ChangePasswordScreen;