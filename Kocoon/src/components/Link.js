import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Link({ text, link, onPress }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textSty}>{text}</Text>
            <TouchableOpacity
                onPress={onPress}
            >
                <Text style={styles.linkSty}>{link}</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textSty: {
        fontSize: 13,
    },
    linkSty: {
        fontSize: 13,
        textDecorationLine: 'underline',
    }
});

export default Link;