import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDashboard from '../screens/MainDashboard';
import ChatScreen from '../screens/ChatScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import OfficeHoursScreen from '../screens/OfficeHoursScreen';
import TutoringScreen from '../screens/TutoringScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='dashboard'
            screenOptions={{
                position: 'absolute',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 96,
                    borderTopColor: '#1DA31A',
                    borderTopWidth: 1,
                    borderColor: '#1DA31A',
                    borderRadius: 15,
                    borderWidth: 1,
                }
            }}
        >
            <Tab.Screen
                name="dashboard"
                component={MainDashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer} >
                            <Image
                                source={require('../../assets/home.png')}
                                style={{ tintColor: focused ? '#1DA31A' : '#979797' }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="discussion"
                component={DiscussionScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer} >
                            <Image
                                source={require('../../assets/discussion.png')}
                                style={{ tintColor: focused ? '#1DA31A' : '#979797' }}
                            />
                        </View>

                    )
                }}
            />
            <Tab.Screen
                name="tutoring"
                component={TutoringScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer} >
                            <Image
                                source={require('../../assets/tutoring.png')}
                                style={{ tintColor: focused ? '#1DA31A' : '#979797' }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="officeHour"
                component={OfficeHoursScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer} >
                            <Image
                                source={require('../../assets/officehour.png')}
                                style={{ tintColor: focused ? '#1DA31A' : '#979797' }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="chatroom"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer} >
                            <Image
                                source={require('../../assets/chat.png')}
                                style={{ tintColor: focused ? '#1DA31A' : '#979797' }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
    }
})