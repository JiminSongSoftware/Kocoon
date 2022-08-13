import React from "react";
import {View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Spacer from "../components/Spacer";

function DashboardScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Text style={styles.categoryText}>Profile Picture</Text>
                {/* profile image */}
                {/* <Image /> */}
                <View>
                    <Text style={styles.profileText}>STUDENT NAME</Text>
                    <Text style={styles.profileText}>STUDENT INFO</Text>
                </View>
            </View>
            <Spacer />
            <Text style={styles.categoryText}>CALENDAR</Text>
            <Spacer />
            <Text style={styles.categoryText}>MY CLASSES</Text>
            <Spacer />
            <Text style={styles.categoryText}>REMINDERS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#1E1E1E',
        padding: 30,
    },
    categoryText: {
        fontSize:20,
        color:'#C4D0CE',
    },
    profileContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
    },
    profileText: {
        color:'#C4D0CE',
        fontSize:16
    }
});

export default DashboardScreen;