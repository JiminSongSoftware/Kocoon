import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import CustomButton from "../components/CustomButton";

function ConfirmationScreen({navigation}) {
    const [verifyCode, setVerifyCode] = useState('');

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.img}
            />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholderTextColor="#000" 
                style={styles.textInput}
                placeholder="Enter verification code"
                value={verifyCode}
                onChangeText={setVerifyCode}
            />
            <Text style={{marginBottom: 60}}>
                if you don't receive your code in 2 minutes,
                please check the email you have entered.
            </Text>
            <CustomButton
                onPress={()=>{navigation.navigate('Login')}}
                text='Sign up'
            />
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
    img:{
        width: 204,
        height: 184,
        marginBottom: 90,
    },
    textInput: {
        marginBottom: 20,
        width: 300,
        padding: 10,
        fontSize:18,
        color: '#103025',
        borderWidth: 1,
        borderRadius: 8,
    },
});

export default ConfirmationScreen;