import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from '../screens/StartingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';

function AuthFlow() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Starting'
        >
            <Stack.Screen
                name='Starting'
                component={StartingScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Signup'
                component={SignupScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Confirmation'
                component={ConfirmationScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='ForgotPassword'
                component={ForgotPasswordScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='ChangePassword'
                component={ChangePasswordScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthFlow;