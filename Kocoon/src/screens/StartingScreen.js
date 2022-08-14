import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

function StartingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.image} />
            <Text style={styles.text}>Learn to Grow</Text>
            <CustomButton text='Login' onPress={()=>{navigation.navigate('Login')}} />
            <Text style={{fontSize:18}}>or</Text>
            <CustomButton text='Sign up' onPress={()=>{navigation.navigate('Signup')}} />
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
        width:204,
        height: 184,
    },
    text: {
        margin: 15,
        fontSize: 24,
    },
})

export default StartingScreen;