import React from "react";
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

function Link({text, onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:13,
        textDecorationLine: 'underline',
    }
});

export default Link;