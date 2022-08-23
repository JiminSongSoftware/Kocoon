import React from "react";
import { StyleSheet, View, Text,  } from "react-native";


function ClassCard({className}){
    return (
        <View style={styles.container}>
            <Text style={styles.textSty}>{className}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#DED6D3',
        borderRadius: 5,
    },
    textSty:{
        fontSize: 15,
    },
})

export default ClassCard;