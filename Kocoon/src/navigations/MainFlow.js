import React from "react";
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from '../screens/DashboardScreen';
import ChatScreen from "../screens/ChatScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ClassScreen from "../screens/ClassScreen";

function LogoTitle() {
    return (
        <Image
            style={{ width: 120, height: 30 }}
            source={require('../../assets/headerLogo.png')}
        />
    );
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// stack navigation between dashboard and other screens except chatscreen
function DashboardStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Dashboard'
                component={DashboardScreen}
                options={{
                    headerShown:false,
                }}
            />
            <Stack.Screen 
                name='Calendar'
                component={CalendarScreen}
            />
            <Stack.Screen 
                name='Class'
                component={ClassScreen}
            />
        </Stack.Navigator>
    );
}

// mainflow navigation
function MainFlow() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70,
                    backgroundColor:'#D9D9D9',
                }
            }}
        >
            <Tab.Screen
                name='DashboardStack'
                component={DashboardStack}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerStyle: {
                        backgroundColor: '#DED6D3',
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer} >
                            <Image
                                source={require('../../assets/home-icon.png')}
                                style={{ width:30, height:30, tintColor: focused ? '#000000' : '#979797' }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name='Chatroom'
                component={ChatScreen}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerStyle: {
                        backgroundColor: '#DED6D3',
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer} >
                            <Image
                                source={require('../../assets/chat-icon.png')}
                                style={{ width:30, height:30, tintColor: focused ? '#000000' : '#979797' }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

// function MainFlow() {

//     return (
//         <Stack.Navigator
//             initialRouteName="Dashboard"
//         >
//             <Stack.Screen
//                 name='Dashboard'
//                 component={DashboardScreen}
//                 options={{
//                     headerTitle: (props) => <LogoTitle {...props} />,
//                     headerStyle: {
//                         backgroundColor: '#DED6D3',
//                     },
//                 }}
//             />
//         </Stack.Navigator>
//     );
// }

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
    }
})

export default MainFlow;