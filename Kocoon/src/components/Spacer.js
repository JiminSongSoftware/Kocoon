import React from "react";
import {View, StyleSheet} from 'react-native';

function Spacer() {
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
    }
})

export default Spacer;