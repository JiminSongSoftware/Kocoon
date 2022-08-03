import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';

function MainFlow() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
        >
            <Stack.Screen
                name='Dashboard'
                component={DashboardScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default MainFlow;