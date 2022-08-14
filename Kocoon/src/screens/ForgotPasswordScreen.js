import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Link from "../components/Link";

function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.img}
            />
            <Text style={{ alignSelf: "flex-start", marginBottom: 5 }}>Forgot password?</Text>
            
            <View style={styles.textInputContainer}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor="#000"
                    style={styles.textInput}
                    placeholder="Enter school email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TouchableOpacity
                    onPress={() => {
                        setEmailSent(true);
                        // navigation.navigate('ChangePassword');
                    }}
                >
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Text style={{ marginBottom: 40 }}>
                You will recieve an email with a link, which
                will allow you to create a new password
            </Text>

            {emailSent ?
                <>
                    <Text style={{ marginBottom: 40, color: '#740000' }}>
                        if you don't receive your code in 2 minutes,
                        please check the email you have entered.
                    </Text>
                    <Link text="don't have an account? " link="sign up" onPress={()=>{navigation.navigate('Signup')}} />
                </>
                :
                null}

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
    textInputContainer: {
        marginBottom: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
    },
    img: {
        width: 204,
        height: 184,
        marginBottom: 90,
    },
    textInput: {
        width: "100%",
        fontSize: 18,
        color: '#103025',
    },
});

export default ForgotPasswordScreen;