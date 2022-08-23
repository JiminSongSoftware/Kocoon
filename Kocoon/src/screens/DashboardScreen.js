import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import Spacer from "../components/Spacer";
import ClassCard from "../components/ClassCard";
import CustomCalendar from "../components/CustomCalendar";

function DashboardScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
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
                <CustomCalendar />
                <Spacer />
                <Text style={styles.categoryText}>MY CLASSES</Text>
                <Spacer />
                <View>
                    <ClassCard className='ACCT 2301 - Introductory Financial Accounting' />
                </View>
                <Spacer />
                <Text style={styles.categoryText}>REMINDERS</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 30,
    },
    categoryText: {
        fontSize: 18,
        color: '#C4D0CE',
    },
    profileContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
    },
    profileText: {
        color: '#C4D0CE',
        fontSize: 16
    },
});

export default DashboardScreen;