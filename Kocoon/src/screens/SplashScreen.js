import React from 'react';
import { StatusBar, View, Text, ActivityIndicator } from 'react-native';

export default function SplashScreen () {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#34495e' }}>
            <StatusBar backgroundColor="#2c3e50" barStyle="light-content" /> 
            <Text style={{ color: 'white', fontSize: 18 }}>Kocoon</Text>
            <ActivityIndicator color={'white'} />
        </View>
    )
}