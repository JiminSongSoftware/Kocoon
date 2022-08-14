import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


function CustomButton({onPress, text}) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
        color: '#C4D0CE',
    },
});

export default CustomButton;