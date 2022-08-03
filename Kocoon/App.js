import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './src/screens/StartingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Starting" 
          component={StartingScreen} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
